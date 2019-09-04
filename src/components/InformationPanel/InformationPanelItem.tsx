import React from 'react';
import Icon, { IconType } from '../Icon';
import { Undertekst } from 'nav-frontend-typografi';
import './InformationPanelItem.less';

interface InformationPanelItemProps {
    label?: string;
    value?: React.ReactChild;
    icon?: IconType;
}

const InformationPanelItem = ({ label, value, icon }: InformationPanelItemProps) => (
    <span className="InformationPanelItem">
        {label && <Undertekst>{label}</Undertekst>}
        {value && (
            <Undertekst>
                {value}
                {icon && <Icon type={icon} />}
            </Undertekst>
        )}
    </span>
);

export default InformationPanelItem;
