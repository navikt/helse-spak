import React, { useRef, useState } from 'react';
import { Normaltekst } from 'nav-frontend-typografi';
import { NedChevron } from 'nav-frontend-chevron';
import { useClickOutside } from '../../hooks';
import './Picker.less';

type ItemType = string | React.ReactChild;

interface PickerProps {
    items: ItemType[];
    preLabel?: string;
    defaultLabel?: string;
    className?: string;
}

const Picker = ({ items, preLabel, defaultLabel, className }: PickerProps) => {
    const [showPopup, setShowPopup] = useState(false);
    const [current, setCurrent] = useState<ItemType>(items[0]);
    const popupRef = useRef<HTMLUListElement>(null);

    useClickOutside(popupRef, showPopup, () => {
        setShowPopup(false);
    });

    return (
        <button
            role="select"
            className={`Picker ${className && className}`}
            onClick={() => setShowPopup(!showPopup)}
        >
            <Normaltekst>
                {preLabel && `${preLabel} `}
                {defaultLabel ? defaultLabel : current}
            </Normaltekst>
            {showPopup && (
                <ul className="Picker__popup" ref={popupRef}>
                    {items.map((item, i) => (
                        <li
                            key={`popup-item-${i}`}
                            role="option"
                            onClick={() => setCurrent(item)}
                            tabIndex={0}
                            aria-selected={current === item}
                        >
                            <Normaltekst>{item}</Normaltekst>
                        </li>
                    ))}
                </ul>
            )}
            <div className="Picker__chevron">
                <NedChevron />
            </div>
        </button>
    );
};

export default Picker;
