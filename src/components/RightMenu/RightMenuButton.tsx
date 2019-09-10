import React, { useState } from 'react';
import './RightMenuButton.less';
import { DialogueIcon, DocumentIcon, HistoryIcon } from './icons';

export enum RightMenuButtonIcon {
    History = 'history',
    Dialogue = 'dialogue',
    Document = 'document'
}

interface RightMenuButtonProps {
    icon: RightMenuButtonIcon;
    active?: boolean;
    onClick?: (event: React.MouseEvent) => void;
}

const RightMenuButton = ({ icon, active, onClick }: RightMenuButtonProps) => {
    const [isActive, setIsActive] = useState(active);
    return (
        <button
            className={`RightMenuButton ${isActive ? 'active' : ''}`}
            onClick={onClick}
        >
            <div className="circle">
                {icon === RightMenuButtonIcon.History ? (
                    <HistoryIcon />
                ) : icon === RightMenuButtonIcon.Dialogue ? (
                    <DialogueIcon />
                ) : (
                    <DocumentIcon />
                )}
            </div>
        </button>
    );
};

export default RightMenuButton;
