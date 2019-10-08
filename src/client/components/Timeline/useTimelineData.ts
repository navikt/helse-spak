import { useContext, useMemo } from 'react';
import { CaseData, TimelineRow } from '../../context/types';
import { CaseContext } from '../../context/CaseContext';
import { toMoments } from './calc';
import { Moment } from 'moment';
import { toDate } from './utils';

const defaultPeriodAction = (
    label: string,
    start: Moment,
    end: Moment
) => () => {
    console.log(`Clicked ${label} ${toDate(start)} - ${toDate(end)}`);
};

export const useTimelineData = () => {
    const { timelineData } = useContext<CaseData>(CaseContext);

    return useMemo(
        () =>
            toMoments(timelineData).map((entry: TimelineRow) => ({
                ...entry,
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                periods: entry.periods.map((period: any) => ({
                    ...period,
                    action: defaultPeriodAction(
                        entry.label,
                        period.start,
                        period.end
                    )
                }))
            })),
        [timelineData]
    );
};
