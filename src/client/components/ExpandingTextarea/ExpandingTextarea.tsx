import React from 'react';
import Textarea from 'react-expanding-textarea';
import { guid } from 'nav-frontend-js-utils';
import './ExpandingTextarea.less';
import { Normaltekst } from 'nav-frontend-typografi';

interface ExpandingTextareaProps {
    label?: string;
    placeholder?: string;
}

const ExpandingTextarea = ({ label, placeholder }: ExpandingTextareaProps) => {
    const labelId = guid();
    return (
        <div className="ExpandingTextarea">
            {label && (
                <label id={labelId}>
                    <Normaltekst>{label}</Normaltekst>
                </label>
            )}
            <Textarea
                aria-labelledby={label && labelId}
                placeholder={placeholder}
                maxLength="2000"
            />
        </div>
    )
};

export default ExpandingTextarea;
