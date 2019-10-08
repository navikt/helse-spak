import { Moment } from 'moment';

export enum PeriodStatus {
    Accepted = 'accepted',
    Rejected = 'rejected'
}

export interface Period {
    start: string | Moment;
    end: string | Moment;
    status?: PeriodStatus;
    action?: () => void;
}

export interface Row {
    label: string;
    periods: Period[];
}
