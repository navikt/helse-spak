import React, { useMemo } from 'react';
import PeriodLine from '../PeriodLine/PeriodLine';
import { calculatePlacement } from '../calc';
import { toDate } from '../utils';
import { Period, PeriodStatus } from '../types';
import { Moment } from 'moment';

interface TimelineRowProps {
    label: string;
    earliest: Moment;
    latest: Moment;
    width: number;
    dates: Period[];
}

const TimelineRow = ({
    dates,
    label,
    earliest,
    latest,
    width
}: TimelineRowProps) => {
    const mappedDates = useMemo(
        () =>
            width === 0
                ? []
                : dates.map(period => ({
                      ...period,
                      ...calculatePlacement(period, earliest, latest, width),
                      start: toDate(period.start),
                      end: toDate(period.end)
                  })),
        [dates, width]
    );

    return (
        <div className="PeriodRow">
            <div className="PeriodLines">
                {mappedDates.map((date, i) => (
                    <PeriodLine
                        key={`period-${label}-${i}`}
                        xPosition={date.x}
                        status={date.status || PeriodStatus.Accepted}
                        label={`${label}: ${date.start} - ${date.end}, status: ${date.status}`}
                        width={date.width}
                        onClick={date.action}
                    />
                ))}
            </div>
            <hr className="TimelineRow__bar" />
        </div>
    );
};

export default TimelineRow;
