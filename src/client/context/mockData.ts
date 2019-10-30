import { CaseData, DagType, PeriodeStatus } from './types';
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
                gradering: isWeekend ? 0 : 100
            };
        });
};

export const mockData: CaseData = {
    person: {
        arbeidsgivere: [
            {
                navn: 'Sykepleierhuset AS',
                perioder: [
                    {
                        fom: '2018-11-15',
                        tom: '2018-12-15',
                        status: PeriodeStatus.Normal,
                        dager: generateDays('2018-11-15', '2018-12-15')
                    },
                    {
                        fom: '2019-04-15',
                        tom: '2019-05-15',
                        status: PeriodeStatus.Solved,
                        dager: generateDays('2019-04-15', '2019-05-15')
                    },
                    {
                        fom: '2019-09-01',
                        tom: '2019-10-01',
                        status: PeriodeStatus.Solved,
                        dager: generateDays('2019-09-01', '2019-10-01')
                    }
                ]
            },
            {
                navn: 'Hjemmehjelpen',
                perioder: [
                    {
                        fom: '2018-12-01',
                        tom: '2018-12-31',
                        status: PeriodeStatus.Unsolved,
                        dager: generateDays('2018-12-01', '2018-12-31')
                    }
                ]
            }
        ],
        ytelser: [
            {
                navn: 'Foreldrepenger',
                perioder: [
                    {
                        fom: '2018-11-01',
                        tom: '2019-05-30',
                        status: PeriodeStatus.Irrelevant
                    }
                ]
            }
        ]
    }
};
