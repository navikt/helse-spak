import React from 'react';
import { Range } from '../types';
import { Undertekst } from 'nav-frontend-typografi';
import {
    calculateLeftPercentage,
    daysInPeriod,
    yearsInRange,
    monthsInRange,
    parseMonthName
} from '../calc';

interface Props {
    range: Range;
}

const Markers = ({ range }: Props) => {
    const displayMonths = range < 12;
    const values: any[] = displayMonths
        ? monthsInRange(range).slice(0, range)
        : yearsInRange(range);

    const days = daysInPeriod(range);

    const markers = values.map(value => {
        const date = displayMonths ? parseMonthName(value) : `${value}-01-01`;
        return {
            value,
            left: `${calculateLeftPercentage(date, days)}%`
        };
    });

    return (
        <>
            {markers.map(marker => (
                <div
                    key={marker.value}
                    className="Timeline__year"
                    style={{ left: marker.left }}
                >
                    <Undertekst>{marker.value}</Undertekst>
                    <div className="Timeline__pin" />
                </div>
            ))}
        </>
    );
};

export default Markers;
