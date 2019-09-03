import React from 'react';
import './RightMenuButton.less';

export enum RightMenuButtonIcon {
    History = 'history',
    Dialogue = 'dialogue',
    Document = 'document'
}

interface RightMenuButtonProps {
    icon: RightMenuButtonIcon;
}

const RightMenuButton = ({ icon }: RightMenuButtonProps) => {
    return (
        <button className="RightMenuButton">
            <div className={`circle ${icon}`} />
        </button>
    );
};

export default RightMenuButton;