import React, { useMemo } from 'react';
import moment, { Moment } from 'moment';
import { Undertekst } from 'nav-frontend-typografi';
import { calculateYearPinPosition } from '../calc';
import './YearPins.css';

interface YearPinsProps {
    years: number[];
    start: Moment;
    end: Moment;
    width: number;
}

const YearPins = ({ years, start, end, width }: YearPinsProps) => {
    const mappedYears = useMemo(
        () =>
            years.map(year => ({
                label: year,
                x: calculateYearPinPosition(
                    moment(year, 'YYYY'),
                    start,
                    end,
                    width
                )
            })),
        [years, width]
    );

    return (
        <div className="YearPins">
            {mappedYears.map(year => (
                <div
                    key={`år-${year.label}`}
                    className="YearPin"
                    style={{
                        left: `${year.x}px`
                    }}
                >
                    <Undertekst>{year.label}</Undertekst>
                    <div className="YearPin__line" />
                </div>
            ))}
        </div>
    );
};

export default YearPins;
