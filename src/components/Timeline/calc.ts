import moment, { Moment } from 'moment';
import { Period, Row } from './types';

export const toMoments = (rows: Row[]): Row[] => {
    return rows.map(row => ({
        ...row,
        periods: row.periods.map(period => ({
            start: moment(period.start),
            end: moment(period.end)
        }))
    }));
};

export const extractDates = (rows: Row[]): Period[] => {
    return rows.reduce<Period[]>((acc, row) => acc.concat(row.periods), []);
};

export const earliestDate = (periods: Period[]): Moment => {
    return periods.reduce((acc: Moment, period: Period) => {
        return (period.start as Moment) < acc ? (period.start as Moment) : acc;
    }, moment());
};

export const latestDate = (periods: Period[]): Moment => {
    return periods.reduce((acc: Moment, period: Period) => {
        return (period.end as Moment) > acc ? (period.end as Moment) : acc;
    }, moment('1900-01-01'));
};

export const daysBetween = (earliestDate: Moment, latestDate: Moment) => {
    return Math.abs(earliestDate.diff(latestDate, 'days'));
};

/* Returnerer en array med alle år hentet fra periodedata, med unntak av det første året.
 * Gitt datoene '2019-05-01', '2017-04-12' og '2013-12-12' returnerer denne
 * [2014, 2015, 2016, 2017, 2018, 2019]
 */
export const yearsBetween = (periods: Period[]) => {
    const earliest = earliestDate(periods).year();
    const latest = latestDate(periods).year();

    return new Array(latest - earliest)
        .fill(earliest)
        .map((year, i) => year + i + 1);
};

/* Finds the horizontal position and width of a period based on the earliest and latest
 * dates as well as the total width of the containing element.
 */
export const calculatePlacement = (
    period: Period,
    start: Moment,
    end: Moment,
    width = 1000
) => {
    const totalDays = daysBetween(start, end);
    const ratio = width / totalDays;

    return {
        x: daysBetween(period.start as Moment, start) * ratio,
        width: daysBetween(period.start as Moment, period.end as Moment) * ratio
    };
};

/* Finds the horizontal position and width of a year pin/label based on the earliest and latest
 * dates as well as the total width of the containing element.
 */
export const calculateYearPinPlacement = (
    year: Moment,
    start: Moment,
    end: Moment,
    width = 1000
) => {
    const totalDays = daysBetween(start, end);
    const ratio = width / totalDays;

    return daysBetween(year, start) * ratio;
};
