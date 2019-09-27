import React from 'react';
import EmployerIcon from './Icons/EmployerIcon';
import SykmelderIcon from './Icons/SykmelderIcon';
import AARegisteretIcon from './Icons/AARegisteretIcon';
import InntektsmeldingIcon from './Icons/InntektsmeldingIcon';

export enum IconType {
    Aaregisteret = 'aaregisteret',
    Inntekstmelding = 'inntektsmelding',
    Sykmelder = 'sykmelder',
    Employer = 'employer'
}

export interface CommonIconProps {
    fontFamily?: string;
    fontColor?: string;
    fontSize?: number;
    fill?: string;
    size?: number;
}

export const iconPadding = 2;

interface IconProps {
    type: IconType;
    size?: number;
}

const renderIcon = (type: IconType, props: CommonIconProps) => {
    switch (type) {
        case IconType.Aaregisteret:
            return <AARegisteretIcon {...props} />;
        case IconType.Employer:
            return <EmployerIcon {...props} />;
        case IconType.Inntekstmelding:
            return <InntektsmeldingIcon {...props} />;
        case IconType.Sykmelder:
            return <SykmelderIcon {...props} />;
    }
};

const Icon = ({
    type,
    size = 20,
    fontFamily = 'Source Sans Pro, Helvetica, Arial, sans-serif',
    ...rest
}: IconProps & CommonIconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox={`0 0 24 24`}
        style={{ padding: iconPadding }}
    >
        {renderIcon(type, {
            fontFamily,
            size,
            ...rest
        })}
    </svg>
);

export default Icon;
