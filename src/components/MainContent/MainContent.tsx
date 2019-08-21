import React, { useState } from 'react';
import Timeline from '../Timeline';
import PersonBar from '../PersonBar';
import './MainContent.less';

const MainContent = () => {
    const [showTimeline, setShowTimeline] = useState(true);

    const toggleTimeline = () => {
        setShowTimeline(!showTimeline);
    };

    return (
        <div className="MainContent">
            <PersonBar
                onToggleTimeline={toggleTimeline}
                showTimeline={showTimeline}
            />
            {showTimeline && (
                <Timeline />
            )}
        </div>
    );
};

export default MainContent;
