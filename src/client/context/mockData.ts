import { CaseData, Employment, Salary, TaskStatus, TimelineRow } from './types';
import { IconType } from '../components/Icon';

const timelineData: TimelineRow[] = [
    {
        label: 'Sykepleierhuset AS',
        periods: [
            {
                start: '2017-12-01',
                end: '2018-02-22'
            },
            {
                start: '2018-07-01',
                end: '2018-07-31'
            },
            {
                start: '2018-08-01',
                end: '2018-08-31'
            },
            {
                start: '2018-09-01',
                end: '2018-09-30'
            },
            {
                start: '2019-06-01',
                end: '2019-06-30'
            }
        ]
    },
    {
        label: 'Hjemmehjelpen',
        periods: [
            {
                start: '2018-02-01',
                end: '2018-03-31'
            },
            {
                start: '2018-09-01',
                end: '2018-11-30'
            }
        ]
    },
    {
        label: 'Sykepleierhuset AS',
        periods: [
            {
                start: '2018-03-20',
                end: '2018-04-30'
            }
        ]
    },
    {
        label: 'Hjemmehjelpen OSLO',
        periods: [
            {
                start: '2018-02-01',
                end: '2018-03-31'
            }
        ]
    },
    {
        label: 'Hjemmehjelpen',
        periods: [
            {
                start: '2018-06-01',
                end: '2018-06-30'
            }
        ]
    }
];

const employment: Employment = {
    arbeidsgiver: 'Sykepleierhuset AS',
    arbeidsforhold: 'Ordinær',
    arbeidstidsordning: 'Ikke skift',
    stillingsprosent: 60,
    start: '12.0.2017',
    yrkesbeskrivelse: 'Sykepleier'
};

const salary: Salary = {
    beregnetInntekt: 17000,
    omregnetÅrsinntekt: 204000,
    gjennomsnittligInntekt: 17328,
    sammenligningsgrunnlag: 155691,
    lastTwelveMonths: [
        11523,
        11523,
        11523,
        11523,
        11523,
        11523,
        11523,
        11523,
        11523,
        17328,
        17328,
        17328
    ]
};

export const mockCaseData: CaseData = {
    sykdomsvilkår: [
        { label: 'Sykdomsvilkår', value: 'OK', status: TaskStatus.Unsolved },
        { label: 'Periode', value: '13.02.2019 - 28.02.2019' }
    ],
    inngangsvilkår: [
        { label: 'Medlemskap', value: 'OK' },
        { label: 'Opptjening', value: 'OK' },
        { label: 'Mer enn 0,5 G', value: 'OK' },
        { label: 'Søknadsfrist', value: 'OK' },
        { label: 'Dager igjen', value: 'OK' },
        { label: 'Under 67 år', value: 'OK' }
    ],
    oppfølging: [
        { label: 'Aktivitetsplikt', value: 'OK' },
        { label: 'Dialogmøte', value: '-' }
    ],
    sykepengegrunnlag: [
        { label: 'Månedsinntekt', value: '17 000,00', icon: IconType.Inntekstmelding },
        { label: 'Omregnet til årsinntekt', value: '204 000,00' },
        { label: 'Sammenligningsgr.lag', value: '155 691,00', icon: IconType.Aaregisteret },
        { label: 'Fastsatt inntekt', value: '-', status: TaskStatus.Unsolved },
        { label: 'Sykepengegrunnlag', value: '-' },
        { label: 'Dagsats', value: '-' }
    ],
    sykepengeperiode: [
        { label: 'Kalenderdager', value: '33' },
        { label: 'Arbeidsgiverdager', value: '16' },
        { label: 'Virkedager', value: '13' },
        { label: 'Ferie', value: '-', status: TaskStatus.Solved },
        { label: 'Sykepengedager', value: '13' },
        { label: 'Sykmeldingsgrad', value: '100%' }
    ],
    utbetaling: [
        { label: 'Refusjon til arbeidsgiver', value: 'Ja' },
        { label: 'Betaler arbeidsgiverperiode', value: 'Ja' },
        { label: 'Fordeling', value: '-' },
        { label: 'Utbetaling', value: '7 407,00 kr' }
    ],
    timelineData,
    employment,
    salary
};
