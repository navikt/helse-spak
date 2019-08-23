import React from 'react';
import RowLabels from './RowLabels';
import TimelineRows from './TimelineRows';
import { TimelineRow } from '../../context/types';
import './Timeline.css';
import { useTimelineData } from './useTimelineData';

export interface TimelineProps {
    rows: TimelineRow[];
}

const Timeline = () => {
    const timelineData = useTimelineData();

    return (
        <div className="Timeline__wrapper">
            {timelineData && (
                <div className="Timeline">
                    <RowLabels rows={timelineData} />
                    <TimelineRows rows={timelineData} />
                </div>
            )}
        </div>
    );
};

export default Timeline;
