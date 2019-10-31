import { PeriodeStatus } from '../../context/types';

export enum Range {
    SIX_MONTHS = 6,
    ONE_YEAR = 12,
    THREE_YEARS = 36
}

export enum DatePosition {
    START = 'start',
    END = 'end'
}

export enum OrganizationType {
    PRIVATE = 'employer',
    NAV = 'nav'
}

export interface TimelinePeriod {
    start: string;
    end: string;
    status?: PeriodeStatus;
}

export interface Case {
    label: string;
    status: string;
}

export interface Date {
    position: DatePosition;
    date: string;
    case: Case;
}

export interface Interval {
    start: string;
    end: string;
    cases: Case[];
    id: string;
}

export interface Row {
    label: string;
    type: OrganizationType;
    periods: TimelinePeriod[];
}

export interface HorizontallyPositioned {
    style: {
        left: number;
        width: number;
    };
}

export type PositionedInterval = Interval & HorizontallyPositioned;

export type PositionedPeriod = TimelinePeriod & HorizontallyPositioned;
