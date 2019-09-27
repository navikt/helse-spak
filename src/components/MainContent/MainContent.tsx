import React from 'react';
import Section from './Section';
import PersonBar from '../PersonBar';
import ActionPanel from '../ActionPanel';
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
            <Section>
                <InformationPanel />
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
