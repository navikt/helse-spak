import React from 'react';
import CopyIcon from './Icons/CopyIcon';
import MaleIcon from './Icons/MaleIcon';
import CheckIcon from './Icons/CheckIcon';
import PhoneIcon from './Icons/PhoneIcon';
import FemaleIcon from './Icons/FemaleIcon';
import EmployerIcon from './Icons/EmployerIcon';
import SykmelderIcon from './Icons/SykmelderIcon';
import AARegisteretIcon from './Icons/AARegisteretIcon';
import InntektsmeldingIcon from './Icons/InntektsmeldingIcon';
import NonBinaryGenderIcon from './Icons/NonBinaryGenderIcon';

export enum IconType {
    NonBinaryGender = 'nonbinarygender',
    Inntekstmelding = 'inntektsmelding',
    Aaregisteret = 'aaregisteret',
    Sykmelder = 'sykmelder',
    Employer = 'employer',
    Female = 'female',
    Phone = 'phone',
    Check = 'check',
    Male = 'male',
    Copy = 'copy'
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
        case IconType.NonBinaryGender:
            return <NonBinaryGenderIcon {...props} />;
        case IconType.Inntekstmelding:
            return <InntektsmeldingIcon {...props} />;
        case IconType.Aaregisteret:
            return <AARegisteretIcon {...props} />;
        case IconType.Sykmelder:
            return <SykmelderIcon {...props} />;
        case IconType.Employer:
            return <EmployerIcon {...props} />;
        case IconType.Female:
            return <FemaleIcon {...props} />;
        case IconType.Phone:
            return <PhoneIcon />;
        case IconType.Check:
            return <CheckIcon />;
        case IconType.Male:
            return <MaleIcon {...props} />;
        case IconType.Copy:
            return <CopyIcon />;
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
        fill={rest.fill}
        className="Icon"
    >
        {renderIcon(type, {
            fontFamily,
            size,
            ...rest
        })}
    </svg>
);

export default Icon;
