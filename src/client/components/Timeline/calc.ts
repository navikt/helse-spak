import { Range } from './types';
import dayjs from 'dayjs';

export const daysInPeriod = (range: Range) => {
    const now = dayjs();
    const then = now.subtract(range, 'month');

    return now.diff(then, 'day');
};

export const calculatePosition = (start: string, end: string, days: number) => {
    const startOfRange = dayjs().subtract(days, 'day');
    const startDate = dayjs(start);
    const endDate = dayjs(end);

    return {
        left: (startDate.diff(startOfRange, 'day') / days) * 100,
        width: Math.abs((startDate.diff(endDate, 'day') / days) * 100)
    };
};

export const yearsInRange = (range: Range) => {
    const now = dayjs();
    const then = now.subtract(range, 'month');
    const numberOfYears = now.diff(then, 'year');

    return new Array(numberOfYears).fill(now.year()).map((year, i) => year - i);
};

export const calculateLeftPercentage = (date: string, days: number) => {
    const then = dayjs().subtract(days, 'day');
    return (dayjs(date).diff(then, 'day') / days) * 100;
};

type Period = {
    start: string;
    end: string;
    metaData: string[];
};

export const overlapping = (p1: Period, p2: Period) => {
    const a = { start: dayjs(p1.start), end: dayjs(p1.end) };
    const b = { start: dayjs(p2.start), end: dayjs(p2.end) };

    if (a.start.isBefore(b.start)) {
        return a.end.isAfter(b.start);
    } else {
        return b.end.isAfter(a.start);
    }
};

export const splitPeriods = (p1: Period, p2: Period) => {
    const a = { ...p1, start: dayjs(p1.start), end: dayjs(p1.end) };
    const b = { ...p2, start: dayjs(p2.start), end: dayjs(p2.end) };

    const firstPeriod = a.start.isBefore(b.start) ? a : b;
    const secondPeriod = firstPeriod === a ? b : a;

    const periodsAreOverlapping = firstPeriod.end.isAfter(secondPeriod.start);
    if (periodsAreOverlapping) {
        return [
            {
                start: firstPeriod.start,
                end: secondPeriod.start,
                metaData: firstPeriod.metaData
            },
            {
                start: secondPeriod.start,
                end: firstPeriod.end,
                metaData: [...firstPeriod.metaData, ...secondPeriod.metaData]
            },
            {
                start: firstPeriod.end,
                end: secondPeriod.end,
                metaData: secondPeriod.metaData
            }
        ];
    }
};
