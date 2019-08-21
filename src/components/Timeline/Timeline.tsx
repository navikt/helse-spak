import React from 'react';
import RowLabels from './RowLabels';
import TimelineRows from './TimelineRows';
import { withPeriods } from './withPeriods';
import { Row } from './types';
import './Timeline.css';

export interface TimelineProps {
    rows: Row[];
}

const Timeline = withPeriods(({ rows }: TimelineProps) => {
    return (
        <div className="Timeline__wrapper">
            {rows && (
                <div className="Timeline">
                    <RowLabels rows={rows} />
                    <TimelineRows rows={rows} />
                </div>
            )}
        </div>
    );
});

export default Timeline;
