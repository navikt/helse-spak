import React, { useMemo } from 'react';
import { trimElement } from './transform';
import { calculatePosition, daysInPeriod } from './calc';
import { Range, TimelinePeriod, PositionedPeriod } from './types';
import './TimelineRow.less';

interface TimelineRowProps {
    periods: TimelinePeriod[];
    range: Range;
}

const TimelineRow = ({ periods, range }: TimelineRowProps) => {
    const days = daysInPeriod(range);

    const positionedPeriods = useMemo(() => {
        return periods
            .map(period => ({
                ...period,
                style: { ...calculatePosition(period.start, period.end, days) }
            }))
            .filter(period => period.style.left + period.style.width > 0)
            .map(trimElement) as PositionedPeriod[];
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
