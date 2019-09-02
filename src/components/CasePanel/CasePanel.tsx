import React, { ReactChild } from 'react';
import { Panel } from 'nav-frontend-paneler';
import { AlertStripeAdvarsel } from 'nav-frontend-alertstriper';
import './CasePanel.less';

interface CasePanelProps {
    text: string;
    children: ReactChild;
}

const CasePanel = ({ text, children }: CasePanelProps) => (
    <Panel className="CasePanel">
        <AlertStripeAdvarsel>{text}</AlertStripeAdvarsel>
        {children}
    </Panel>
);

export default CasePanel;
