import React from 'react';
import { Select } from 'nav-frontend-skjema';
import { DagType } from '../../context/types';
import './TypeSelect.less';

interface Props {
    selected: DagType;
    onSelect: (value: DagType) => void;
}

const capitalize = (text: string) =>
    text.charAt(0).toUpperCase() + text.slice(1);

const TypeSelect = ({ selected, onSelect }: Props) => {
    return (
        <Select
            label=""
            className="TypeSelect"
            onChange={e => onSelect(e.target.value as DagType)}
        >
            <option value={selected}>{capitalize(selected)}</option>
            {Object.values(DagType)
                .filter(value => value !== selected && value !== DagType.Helg)
                .map(value => (
                    <option key={value} value={value}>
                        {capitalize(value)}
                    </option>
                ))}
        </Select>
    );
};

export default TypeSelect;
