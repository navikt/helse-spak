import { Moment } from 'moment';
import { PeriodStatus } from '../components/Timeline/types';

export enum TaskStatus {
    Solved = 'solved',
    Unsolved = 'unsolved',
    Normal = 'normal'
}

export interface CaseField {
    label: string;
    value?: string;
    status?: TaskStatus;
}

export interface TimelinePeriod {
    start: string | Moment;
    end: string | Moment;
    status?: PeriodStatus;
    action?: () => void;
}

export interface TimelineRow {
    label: string;
    periods: TimelinePeriod[];
}

export interface CaseData {
    inngangsvilkår: CaseField[];
    oppfølging: CaseField[];
    sykdomsvilkår: CaseField[];
    sykepengegrunnlag: CaseField[];
    sykepengeperiode: CaseField[];
    utbetaling: CaseField[];
    timelineData: TimelineRow[];
}