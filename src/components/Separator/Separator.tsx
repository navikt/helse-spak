import React from 'react';
import { SeparatorAlignment, SeparatorType } from './types';
import './Separator.less';

interface SeparatorProps {
    type?: SeparatorType;
    alignment?: SeparatorAlignment;
}

const Separator = ({
    type = SeparatorType.Solid,
    alignment = SeparatorAlignment.Horizontal
}: SeparatorProps) => {
    return <div className={`Separator ${type} ${alignment}`} />;
};

export default Separator;
