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
