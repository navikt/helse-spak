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
    const name = 'Mia Cathrine Svendsen';
    const fnr = '12108434566';
    const tlf = '98765432';
    const gender = 'kvinne';

    return (
        <div className="PersonBar">
            <Element>
                <Icon type={iconType(gender)} size={24} />
                {name}
            </Element>
            <span>/</span>
            <Clipboard>
                <Normaltekst>{formatFnr(fnr)}</Normaltekst>
            </Clipboard>
            <span>/</span>
            <Normaltekst>
                <Icon type={IconType.Phone} />
                Telefon: {formatTlf(tlf)}
            </Normaltekst>
            <div className="divider" />
        </div>
    );
};

export default PersonBar;
