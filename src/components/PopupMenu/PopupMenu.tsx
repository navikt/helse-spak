import React, { useRef, useState } from 'react';
import classNames from 'classnames';
import { useClickOutside } from '../../hooks';
import './PopupMenu.less';

interface PopupMenuProps {
    buttonContent: React.ReactChild;
    popupContent: React.ReactChild;
    className?: string;
}

const PopupMenu = ({
    buttonContent,
    popupContent,
    className
}: PopupMenuProps) => {
    const [active, setActive] = useState(false);
    const popupRef = useRef<HTMLDivElement>(null);
    useClickOutside(popupRef, active, () => setActive(false));

    return (
        <div className={classNames('PopupMenu', className)}>
            <div
                role="menu"
                className="PopupMenu__button"
                onClick={() => setActive(!active)}
            >
                {buttonContent}
            </div>
            {active && (
                <div className="PopupMenu__popup" ref={popupRef}>
                    {popupContent}
                </div>
            )}
        </div>
    );
};

export default PopupMenu;
