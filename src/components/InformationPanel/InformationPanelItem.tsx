import React from 'react';
import Icon, { IconType } from '../Icon';
import { Undertekst } from 'nav-frontend-typografi';
import './InformationPanelItem.less';

interface InformationPanelItemProps {
    label?: string;
    value?: React.ReactChild;
    icon?: IconType;
}

const InformationPanelItem = ({
    label,
    value,
    icon
}: InformationPanelItemProps) => (
    <>
        {label && (
            <Undertekst className="InformationPanel__item">{label}</Undertekst>
        )}
        {value && (
            <Undertekst className="InformationPanel__item">
                {value}
                {icon && <Icon type={icon} />}
            </Undertekst>
        )}
    </>
);

export default InformationPanelItem;
