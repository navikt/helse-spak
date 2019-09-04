import React from 'react';
import Section from './Section';
import Timeline from '../Timeline';
import CasePanel from '../CasePanel/CasePanel';
import PersonBar from '../PersonBar';
import Separator, { SeparatorType } from '../Separator';
import InformationPanel from '../InformationPanel';
import './MainContent.less';
import ActionPanel from '../ActionPanel';

const casePanelText =
    '31% avvik - Mer enn 25% avvik mellom oppgitt månedsinntekt og rapportert årsinntekt';

const MainContent = () => {
    return (
        <div className="MainContent">
            <Section>
                <PersonBar />
            </Section>
            <Separator />
            <Section>
                <Timeline />
            </Section>
            <Separator />
            <Section>
                <CasePanel text={casePanelText}>
                    <InformationPanel />
                </CasePanel>
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
