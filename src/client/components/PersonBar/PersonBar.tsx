import React from 'react';
import Clipboard from '../Clipboard';
import Icon, { IconType } from '../Icon';
import { Element, Normaltekst } from 'nav-frontend-typografi';
import './PersonBar.less';

const iconType = (gender: string) => {
    switch (gender) {
        case 'kvinne':
            return IconType.Female;
        case 'mann':
            return IconType.Male;
        default:
            return IconType.NonBinaryGender;
    }
};

const formatFnr = (fnr: string) => {
    return fnr.slice(0, 6) + ' ' + fnr.slice(6);
};

const formatTlf = (tlf: string) => {
    return [tlf.slice(0, 3), tlf.slice(3, 5), tlf.slice(5)].join(' ');
};

const PersonBar = () => {
    const name = 'Sjaman Durek';
    const fnr = '12345654321';
    const tlf = '12345678';
    const gender = 'mann';

    return (
        <div className="PersonBar">
            <Element className="PersonBar__gender">
                <Icon type={iconType(gender)} size={24} />
                {name}
            </Element>
            <span>/</span>
            <Clipboard>
                <Normaltekst>{formatFnr(fnr)}</Normaltekst>
            </Clipboard>
            <span>/</span>
            <Normaltekst className="PersonBar__phone">
                <Icon type={IconType.Phone} />
                {formatTlf(tlf)}
            </Normaltekst>
            <div className="divider" />
        </div>
    );
};

export default PersonBar;
