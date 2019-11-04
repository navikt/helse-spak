import { CaseData, DagType, DataSource, PeriodeStatus } from './types';
import uuid from 'uuid/v4';
import dayjs from 'dayjs';

const shouldChangeType = () => {
    return Math.random() > 0.8;
};

const randomDagType = (): DagType => {
    const types = Object.entries(DagType);
    const index = Math.floor(Math.random() * types.length);
    let type = types[index][1];
    if (!shouldChangeType()) {
        type = DagType.Syk;
    }
    return type === DagType.Helg ? randomDagType() : type;
};

const generateDays = (fom: string, tom: string) => {
    const firstDay = dayjs(fom);
    const lastDay = dayjs(tom);
    const daysBetween = Math.abs(firstDay.diff(lastDay, 'day'));

    let currentType = randomDagType();
    return new Array(daysBetween)
        .fill({})
        .map((day, i) => firstDay.add(i, 'day'))
        .map(day => {
            if (shouldChangeType()) {
                currentType = randomDagType();
            }
            const isWeekend = day.day() >= 5;
            return {
                dato: day.format('YYYY-MM-DD'),
                type: isWeekend ? DagType.Helg : currentType,
                gradering: isWeekend ? 0 : 100,
                kilde: isWeekend ? undefined : DataSource.SM
            };
        });
};

const generatePeriod = (fom: string, tom: string, status: PeriodeStatus) => ({
    id: uuid(),
    fom,
    tom,
    status,
    dager: generateDays(fom, tom)
});

export const mockData: CaseData = {
    person: {
        arbeidsgivere: [
            {
                id: uuid(),
                navn: 'Sykepleierhuset AS',
                perioder: [
                    generatePeriod(
                        '2018-11-15',
                        '2018-12-15',
                        PeriodeStatus.Normal
                    ),
                    generatePeriod(
                        '2019-04-15',
                        '2019-05-15',
                        PeriodeStatus.Solved
                    ),
                    generatePeriod(
                        '2019-09-01',
                        '2019-10-01',
                        PeriodeStatus.Solved
                    )
                ]
            },
            {
                id: uuid(),
                navn: 'Hjemmehjelpen',
                perioder: [
                    generatePeriod(
                        '2018-12-01',
                        '2018-12-31',
                        PeriodeStatus.Unsolved
                    )
                ]
            }
        ],
        ytelser: [
            {
                navn: 'Foreldrepenger',
                perioder: [
                    generatePeriod(
                        '2018-11-01',
                        '2019-05-30',
                        PeriodeStatus.Irrelevant
                    )
                ]
            }
        ]
    }
};
