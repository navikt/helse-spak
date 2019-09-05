import React from 'react';
import './RightMenuButton.less';
import { DialogueIcon, DocumentIcon, HistoryIcon } from './icons';

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