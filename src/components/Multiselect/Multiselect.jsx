import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';
import { guid } from 'nav-frontend-js-utils';
import './Multiselect.less';

const Multiselect = ({ label, placeholder, options }) => {
    const ariaId = guid();
    return (
        <div className="Multiselect">
            {label && (
                <div className="Multiselect__label">
                    <label id={ariaId}>
                        {label}
                    </label>
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

Multiselect.propTypes = {
    label: PropTypes.string,
    placeholder: PropTypes.string,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.string,
            label: PropTypes.string
        })
    )
};

export default Multiselect;
