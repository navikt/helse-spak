import React, { useRef, useState } from 'react';
import './CasePicker.less';
import { Normaltekst } from 'nav-frontend-typografi';
import { useClickOutside } from '../../hooks/useClickOutside';
import { NedChevron } from 'nav-frontend-chevron';

interface CasePickerProps {
    caseId?: string;
    cases?: string[];
}

const CasePicker = ({
    caseId = '123456789',
    cases = ['123456789', '987654321', '134679258']
}: CasePickerProps) => {
    const [showPopup, setShowPopup] = useState(false);
    const popupRef = useRef<HTMLUListElement>(null);

    useClickOutside(popupRef, showPopup, () => {
        setShowPopup(false);
    });

    return (
        <div className="CasePicker">
            <Normaltekst>SAKS ID {caseId}</Normaltekst>
            {showPopup && (
                <ul className="CasePicker__popup" ref={popupRef}>
                    {cases.map((c, i) => (
                        <li key={`popup-sak-${i}`}>
                            <Normaltekst>{c}</Normaltekst>
                        </li>
                    ))}
                </ul>
            )}
            <button onClick={() => setShowPopup(!showPopup)}>
                <NedChevron />
            </button>
        </div>
    );
};

export default CasePicker;
