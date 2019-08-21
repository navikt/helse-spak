import React, { useMemo } from 'react';
import moment from 'moment';
import { Undertekst } from 'nav-frontend-typografi';
import { calculateYearPinPlacement } from '../calc';
import './YearPins.css';

interface YearPinsProps {
    years: number[];
    startDate: object;
    endDate: object;
    width: number;
}

const YearPins = ({ years, startDate, endDate, width }: YearPinsProps) => {
    const mappedYears = useMemo(
        () =>
            years.map(year => ({
                label: year,
                x: calculateYearPinPlacement(
                    moment(year, 'YYYY'),
                    startDate,
                    endDate,
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
