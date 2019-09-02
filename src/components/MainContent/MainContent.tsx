import React from 'react';
import Timeline from '../Timeline';
import PersonBar from '../PersonBar';
import Separator, { SeparatorType } from '../Separator';
import InformationPanel from '../Informasjonspanel/InformationPanel';
import './MainContent.less';
import Section from './Section';
import CasePanel from '../CasePanel/CasePanel';

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
            <Section>
                <CasePanel text={casePanelText}>
                    <InformationPanel />
                </CasePanel>
            </Section>
            <Section>
                <Separator type={SeparatorType.Dotted}/>
            </Section>
        </div>
    );
};

export default MainContent;
