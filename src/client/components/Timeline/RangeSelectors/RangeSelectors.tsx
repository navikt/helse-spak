import React from 'react';
import { Range } from '../types';
import { Normaltekst } from 'nav-frontend-typografi';
import './RangeSelectors.less';

interface RangeSelectorProps {
    label: string;
    range: Range;
    onSelect: (range: Range) => void;
    selectedRange: Range;
}

const RangeSelector = ({
    label,
    range,
    onSelect,
    selectedRange
}: RangeSelectorProps) => {
    return (
        <button
            className={selectedRange === range ? 'active' : ''}
            onClick={() => onSelect(range)}
        >
            <Normaltekst>{label}</Normaltekst>
        </button>
    );
};

interface RangeSelectorsProps {
    selectedRange: Range;
    onSelect: (range: Range) => void;
}

const RangeSelectors = ({ selectedRange, onSelect }: RangeSelectorsProps) => {
    return (
        <span className="RangeSelectors">
            <RangeSelector
                label="6 mdn"
                range={Range.SIX_MONTHS}
                onSelect={onSelect}
                selectedRange={selectedRange}
            />
            <RangeSelector
                label="1 år"
                range={Range.ONE_YEAR}
                onSelect={onSelect}
                selectedRange={selectedRange}
            />
            <RangeSelector
                label="3 år"
                range={Range.THREE_YEARS}
                onSelect={onSelect}
                selectedRange={selectedRange}
            />
        </span>
    );
};

export default RangeSelectors;
