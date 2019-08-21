import React from 'react';
import { Element, Undertekst } from 'nav-frontend-typografi';
import { NedChevron, OppChevron } from 'nav-frontend-chevron';
import './PersonBar.less';

interface PersonBarProps {
    showTimeline: boolean;
    onToggleTimeline: () => void;
}

const PersonBar = ({ onToggleTimeline, showTimeline }: PersonBarProps) => {
    return (
        <div className="PersonBar">
            <Element>Mia Cathrine Svendsen</Element>
            <Undertekst>121084 34566</Undertekst>
            <Undertekst>987 65 432</Undertekst>
            <div className="divider" />
            <button onClick={onToggleTimeline}>
                <Undertekst className="PersonBar__button">
                    {showTimeline ? 'Skjul tidslinje' : 'Vis tidslinje'}
                </Undertekst>
                {showTimeline ? <OppChevron /> : <NedChevron />}
            </button>
        </div>
    );
};

export default PersonBar;