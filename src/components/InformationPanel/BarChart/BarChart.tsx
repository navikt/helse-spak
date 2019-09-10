import React, { useEffect, useRef, useState } from 'react';
import { Undertekst } from 'nav-frontend-typografi';
import { formatCurrency } from '../../../utility/locale';
import { useElementSize } from '../../../hooks/useElementSize';
import {
    calculateYearPinPosition,
    incomeToHeight,
    lastTwelveMonths
} from './calc';
import { motion } from 'framer-motion';
import './BarChart.less';

const months = lastTwelveMonths();

interface BarCharProps {
    data: number[];
}

const BarChart = ({ data }: BarCharProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const [maxHeight, maxWidth] = useElementSize(ref);
    const [heights, setHeights] = useState<number[]>([]);
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(0);

    useEffect(() => {
        if (maxHeight > 0 && max > 0) {
            setHeights(
                data.map(income => incomeToHeight(income, max, maxHeight))
            );
        }
    }, [maxHeight, max, data]);

    useEffect(() => {
        setMin(data.reduce((prev, curr) => Math.min(prev, curr)));
        setMax(data.reduce((prev, curr) => Math.max(prev, curr)));
    }, [data]);

    return (
        <div className="BarChart" ref={ref}>
            <div className="BarChart__bars">
                {heights.map((height, i) => (
                    <motion.div
                        key={`BarChart__bar-${i}`}
                        className="BarChart__bar"
                        animate={{
                            height
                        }}
                        transition={{
                            type: 'spring',
                            stiffness: 200,
                            damping: 15
                        }}
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
                style={{ left: `${calculateYearPinPosition(maxWidth)}%` }}
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
