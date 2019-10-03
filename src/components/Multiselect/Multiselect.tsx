import React from 'react';
import Select from 'react-select';
import { guid } from 'nav-frontend-js-utils';
import { Option } from './types';
import './Multiselect.less';

interface MultiselectProps {
    label: string;
    options: Option[];
    placeholder?: string;
}

const Multiselect = ({
    label,
    options,
    placeholder = 'Velg...'
}: MultiselectProps) => {
    const ariaId = guid();
    return (
        <div className="Multiselect">
            {label && (
                <div className="Multiselect__label">
                    <label id={ariaId}>{label}</label>
                </div>
            )}
            <Select
                classNamePrefix="Multiselect"
                placeholder={placeholder}
                options={options}
                hideSelectedOptions={false}
                closeMenuOnSelect={false}
                aria-labelledby={ariaId}
                isMulti
            />
        </div>
    );
};

export default Multiselect;
