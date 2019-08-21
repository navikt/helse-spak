import React from 'react';
import './Icon.less';

export enum IconType {
    Aaregisteret = 'aaregisteret',
    Inntekstmelding = 'inntektsmelding',
    Arbeidsgiver = 'arbeidsgiver_grå',
    Sykmelder = 'sykmelder',
    Meny = 'meny'
}

interface IconProps {
    type: IconType;
}

const Icon = ({ type }: IconProps) => (
    <svg tabIndex={-1} className={`Icon Icon-${type}`} />
);

export default Icon;
