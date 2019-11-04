export enum DataSource {
    SM = 'SM'
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

export enum PeriodeStatus {
    Solved = 'solved',
    Unsolved = 'unsolved',
    Normal = 'normal',
    Irrelevant = 'irrelevant'
}

export interface Dag {
    dato: string;
    type: DagType;
    gradering: number;
    kilde?: DataSource;
}

export interface Periode {
    id: string;
    fom: string;
    tom: string;
    status: PeriodeStatus;
    dager?: Dag[];
}

export interface Arbeidsgiver {
    id: string;
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
