import React from 'react';
import { Undertekst } from 'nav-frontend-typografi';
import './InformationPanelItem.less';

interface InformationPanelItemProps {
    label?: string;
    value?: React.ReactChild;
}

const InformationPanelItem = ({ label, value }: InformationPanelItemProps) => (
    <span className="InformationPanelItem">
        {label && <Undertekst>{label}</Undertekst>}
        {value && <Undertekst>{value}</Undertekst>}
    </span>
);

export default InformationPanelItem;
