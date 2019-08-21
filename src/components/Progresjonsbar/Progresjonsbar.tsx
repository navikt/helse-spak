import React from 'react';
import { Undertekst } from 'nav-frontend-typografi';
import './Progresjonsbar.less';

interface ProgresjonsbarProps {
    current: number;
    total: number;
}

const Progresjonsbar = ({ current, total }: ProgresjonsbarProps) => {
    return (
        <div className="Progresjonsbar__wrapper">
            <div className="Progresjonsbar">
                <figure
                    className="Progresjonsbar__bar"
                    style={{
                        width: `${(current / total) * 100}%`,
                        borderWidth: current > 0 ? '0.25rem' : 0
                    }}
                />
            </div>
            <Undertekst className="Progresjonsbar__counter">
                {current}/{total}
            </Undertekst>
        </div>
    );
};

export default Progresjonsbar;
