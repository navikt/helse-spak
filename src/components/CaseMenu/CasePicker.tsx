import React, { useRef, useState } from 'react';
import Picker from '../Picker';
import { useClickOutside } from '../../hooks';
import './CasePicker.less';

interface CasePickerProps {
    caseId?: string;
    cases?: string[];
}

const CasePicker = ({
    cases = ['123456789', '987654321', '134679258']
}: CasePickerProps) => {
    const [showPopup, setShowPopup] = useState(false);
    const popupRef = useRef<HTMLUListElement>(null);

    useClickOutside(popupRef, showPopup, () => {
        setShowPopup(false);
    });

    return <Picker className="CasePicker" preLabel="Saks id" items={cases} />;
};

export default CasePicker;
