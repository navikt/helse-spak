import React from 'react';
import Section from '../../components/MainContent/Section';
import ActionPanel from '../../components/ActionPanel';
import FeedbackButton from '../../components/FeedbackButton';
import InformationPanel from '../../components/InformationPanel';
import Separator, { SeparatorType } from '../../components/Separator';

const Sykepengegrunnlag = () => {
    return (
        <div className="Sykepengegrunnlag">
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

export default Sykepengegrunnlag;
