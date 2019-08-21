import React from 'react';
import { Undertekst } from 'nav-frontend-typografi';
import { TimelineProps } from '../Timeline';
import './RowLabels.css';

const RowLabels = ({ rows }: TimelineProps) => (
    <div className="RowLabels">
        {rows.map((row, i) => (
            <Undertekst key={`period-label-${i}`}>{row.label}</Undertekst>
        ))}
    </div>
);

export default RowLabels;
