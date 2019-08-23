import React, { useState } from 'react';
import Timeline from '../Timeline';
import PersonBar from '../PersonBar';
import Separator, { SeparatorType } from '../Separator';
import InformationPanel from '../Informasjonspanel/InformationPanel';
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
            <Separator />
            {showTimeline && <Timeline />}
            <InformationPanel />
            <Separator type={SeparatorType.Dotted} />
        </div>
    );
};

export default MainContent;
