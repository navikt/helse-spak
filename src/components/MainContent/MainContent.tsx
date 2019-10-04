import React from 'react';
import Section from './Section';
import TaskBar from '../TaskBar';
import PersonBar from '../PersonBar';
import ActionPanel from '../ActionPanel';
import FeedbackButton from '../FeedbackButton';
import InformationPanel from '../InformationPanel';
import Separator, { SeparatorType } from '../Separator';
import './MainContent.less';

const MainContent = () => {
    return (
        <div className="MainContent">
            <Section>
                <PersonBar />
            </Section>
            <Separator />
            <TaskBar />
            <Section>
                <Separator type={SeparatorType.Dotted} />
            </Section>
            <Section>
                <InformationPanel />
                <div className="MainContent__feedback">
                    <FeedbackButton />
                </div>
            </Section>
            <Section>
                <Separator type={SeparatorType.Dotted} />
            </Section>
            <Section>
                <ActionPanel />
            </Section>
        </div>
    );
};

export default MainContent;
