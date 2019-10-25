import React, { useMemo } from 'react';
import { Range } from './types';
import { OrganizationType, TimelinePeriod } from './Timeline';
import { calculatePosition, daysInPeriod } from './calc';
import './TimelineRow.less';

interface TimelineRowProps {
    label: string;
    type: OrganizationType;
    periods: TimelinePeriod[];
    range: Range;
}

const TimelineRow = ({ periods, range }: TimelineRowProps) => {
    const days = daysInPeriod(range);

    const positionedPeriods = useMemo(() => {
        return periods.map(period => ({
            ...period,
            style: { ...calculatePosition(period.start, period.end, days) }
        }));
    }, [periods, range]);

    return (
        <div className="TimelineRow">
            {positionedPeriods.map(period => (
                <div
                    key={period.start}
                    className={`TimelineRow__period ${period.status || ''}`}
                    style={{
                        left: `${period.style.left}%`,
                        width: `${period.style.width}%`
                    }}
                />
            ))}
        </div>
    );
};

export default TimelineRow;
