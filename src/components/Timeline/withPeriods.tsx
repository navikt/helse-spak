import React from 'react';
import { toMoments } from './calc';
import { toDate } from './utils';
import { PeriodStatus } from './types';
import { TimelineProps } from './Timeline';

export const withPeriods = (
    Component: React.FunctionComponent<TimelineProps>
) => {
    return (props: TimelineProps) => {
        const data = [
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

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const periods = toMoments(data).map((entry: any) => ({
            ...entry,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            periods: entry.periods.map((period: any) => ({
                ...period,
                status: PeriodStatus.Accepted,
                action: () =>
                    // tslint:disable-next-line:no-console
                    console.log(
                        `Clicked ${entry.label} ${toDate(
                            period.start
                        )} - ${toDate(period.end)}`
                    )
            }))
        }));

        return <Component rows={periods} {...props} />;
    };
};
