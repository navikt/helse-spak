import { Moment } from 'moment';
import { PeriodStatus } from '../components/Timeline/types';
import { IconType } from '../components/Icon';

export enum TaskStatus {
    Solved = 'solved',
    Unsolved = 'unsolved',
    Normal = 'normal'
}

export interface CaseField {
    label: string;
    value?: string;
    status?: TaskStatus;
    icon?: IconType;
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

export interface Employment {
    arbeidsgiver: string;
    arbeidsforhold: string;
    yrkesbeskrivelse: string;
    arbeidstidsordning: string;
    stillingsprosent: number;
    start: string;
    end?: string;
}

export interface Salary {
    beregnetInntekt: number;
    gjennomsnittligInntekt: number;
    sammenligningsgrunnlag: number;
    omregnetÅrsinntekt: number;
    lønnstype?: string;
}

export interface CaseData {
    inngangsvilkår: CaseField[];
    oppfølging: CaseField[];
    sykdomsvilkår: CaseField[];
    sykepengegrunnlag: CaseField[];
    sykepengeperiode: CaseField[];
    utbetaling: CaseField[];
    timelineData: TimelineRow[];
    employment: Employment;
    salary: Salary;
}
