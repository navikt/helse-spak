import { Range } from './types';
// @ts-ignore
import locale from 'dayjs/locale/nb';
import dayjs, { Dayjs } from 'dayjs';

dayjs.locale(locale);

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

export const calculateLeftPercentage = (date: string | Dayjs, days: number) => {
    const then = dayjs().subtract(days, 'day');
    return (dayjs(date).diff(then, 'day') / days) * 100;
};

export const yearsInRange = (range: Range): number[] => {
    const now = dayjs();
    const then = now.subtract(range, 'month');
    const numberOfYears = now.diff(then, 'year');

    return new Array(numberOfYears).fill(now.year()).map((year, i) => year - i);
};

export const monthsInRange = (range: Range): string[] => {
    const currentMonth = dayjs().startOf('month');
    return new Array(range)
        .fill(0)
        .map((_, i) => currentMonth.subtract(i, 'month').format('MMMM'));
};

export const parseMonthName = (month: string) => {
    const months = [
        'januar',
        'februar',
        'mars',
        'april',
        'mai',
        'juni',
        'juli',
        'august',
        'september',
        'oktober',
        'november',
        'desember'
    ];
    const index = months.findIndex(m => m === month);
    return dayjs().month(index).startOf('month');
};
