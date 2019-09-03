import React, { useState } from 'react';
import RowLabels from './RowLabels';
import TimelineRows from './TimelineRows';
import { TimelineRow } from '../../context/types';
import { useTimelineData } from './useTimelineData';
import './Timeline.less';
import { Undertekst } from 'nav-frontend-typografi';
import { NedChevron, OppChevron } from 'nav-frontend-chevron';
import { AnimatePresence, motion } from 'framer-motion';

export interface TimelineProps {
    rows: TimelineRow[];
}

const timelineAnimation = {
    initial: { height: 0 },
    animate: { height: 'unset' },
    exit: { height: 0 },
    transition: { type: 'tween' }
};

const Timeline = () => {
    const timelineData = useTimelineData();

    const [showTimeline, setShowTimeline] = useState(true);

    const onToggleTimeline = () => {
        setShowTimeline(!showTimeline);
    };

    return (
        <div className="Timeline__wrapper">
            <button className="Timeline__toggle" onClick={onToggleTimeline}>
                <Undertekst>{showTimeline ? 'Skjul' : 'Vis'}</Undertekst>
                {showTimeline ? <OppChevron /> : <NedChevron />}
            </button>
            <AnimatePresence initial={false}>
                {timelineData && showTimeline && (
                    <motion.div className="Timeline" {...timelineAnimation}>
                        <RowLabels rows={timelineData} />
                        <TimelineRows rows={timelineData} />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Timeline;
