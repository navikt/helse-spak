export enum PeriodType {
    Egenmelding = 'egenmelding',
    Helg = 'helg',
    Syk = 'syk',
    Ubestemt = 'ubestemt',
    Utenlands = 'utenlands',
    Permisjon = 'permisjon',
    Arbeidsdag = 'arbeidsdag',
    AnnenInntekt = 'annen_inntekt',
    Utdanning = 'utdanning'
}

export enum PeriodSource {
    SM = 'SM'
}

export enum PeriodeStatus {
    Solved = 'solved',
    Unsolved = 'unsolved',
    Normal = 'normal',
    Irrelevant = 'irrelevant'
}

export interface TableRow {
    date: string;
    type?: PeriodType;
    source?: PeriodSource;
    degree?: number;
    dagsats?: number;
    key?: string;
}

export enum DagType {
    Egenmelding = 'egenmelding',
    Helg = 'helg',
    Syk = 'syk',
    Ubestemt = 'ubestemt',
    Utenlands = 'utenlands',
    Permisjon = 'permisjon',
    Arbeidsdag = 'arbeidsdag',
    AnnenInntekt = 'annen_inntekt',
    Utdanning = 'utdanning'
}

export interface Dag {
    dato: string;
    type: DagType;
    gradering: number;
}

export interface Periode {
    fom: string;
    tom: string;
    status: PeriodeStatus;
    dager?: Dag[];
}

export interface Arbeidsgiver {
    navn: string;
    perioder: Periode[];
}

export interface Ytelse {
    navn: string;
    perioder: Periode[];
}

export interface Person {
    arbeidsgivere: Arbeidsgiver[];
    ytelser: Ytelse[];
}

export interface CaseData {
    person: Person;
}
