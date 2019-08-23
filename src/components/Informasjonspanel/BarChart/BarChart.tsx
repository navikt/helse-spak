import React, { useEffect, useRef, useState } from 'react';
import { Undertekst } from 'nav-frontend-typografi';
import { formatCurrency } from '../../../utility/locale';
import { useElementSize } from '../../../hooks/useElementSize';
import {
    calculateYearPinPosition,
    incomeToHeight,
    lastTwelveMonths
} from './calc';
import './BarChart.less';

const months = lastTwelveMonths();

const randomIncome = (low: number, high: number) => {
    const offset = Math.random() * Math.abs(low - high);
    return Math.floor(low) + Math.floor(offset);
};

const incomes = new Array(12).fill(0).map(() => randomIncome(20000, 25000));

const BarChart = () => {
    const ref = useRef<HTMLDivElement>(null);
    const [maxHeight, maxWidth] = useElementSize(ref);
    const [heights, setHeights] = useState<number[]>([]);
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(0);

    useEffect(() => {
        if (maxHeight > 0 && max > 0) {
            setHeights(
                incomes.map(income => incomeToHeight(income, max, maxHeight))
            );
        }
    }, [maxHeight, max]);

    useEffect(() => {
        setMin(incomes.reduce((prev, curr) => Math.min(prev, curr)));
        setMax(incomes.reduce((prev, curr) => Math.max(prev, curr)));
    }, [incomes]);

    return (
        <div className="BarChart" ref={ref}>
            <div className="BarChart__bars">
                {heights.map((height, i) => (
                    <div
                        key={`BarChart__bar-${i}`}
                        className="BarChart__bar"
                        style={{ height: `${height}px` }}
                    />
                ))}
            </div>
            <div className="months">
                {months.map((month, i) => (
                    <Undertekst key={`month-${i}`}>{month}</Undertekst>
                ))}
            </div>
            <div
                className="year"
                style={{ left: `${calculateYearPinPosition(maxWidth)}px` }}
            >
                <Undertekst>2019</Undertekst>
                <div className="pin" />
            </div>
            <div
                className="min"
                style={{ bottom: `${incomeToHeight(min, max, maxHeight)}px` }}
            >
                <div className="pin" />
                <Undertekst>{formatCurrency(min)}</Undertekst>
            </div>
            <div className="max">
                <div className="pin" />
                <Undertekst>{formatCurrency(max)}</Undertekst>
            </div>
        </div>
    );
};

export default BarChart;
