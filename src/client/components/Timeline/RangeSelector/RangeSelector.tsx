import React from 'react';
import { Range } from '../types';
import { Normaltekst } from 'nav-frontend-typografi';
import './RangeSelector.less';

interface RangeSelectorButtonProps {
    label: string;
    range: Range;
    onSelect: (range: Range) => void;
    selectedRange: Range;
}

const RangeSelectorButton = ({
    label,
    range,
    onSelect,
    selectedRange
}: RangeSelectorButtonProps) => {
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

const RangeSelector = ({ selectedRange, onSelect }: RangeSelectorsProps) => {
    return (
        <span className="RangeSelector">
            <RangeSelectorButton
                label="6 mnd"
                range={Range.SIX_MONTHS}
                onSelect={onSelect}
                selectedRange={selectedRange}
            />
            <RangeSelectorButton
                label="1 år"
                range={Range.ONE_YEAR}
                onSelect={onSelect}
                selectedRange={selectedRange}
            />
            <RangeSelectorButton
                label="3 år"
                range={Range.THREE_YEARS}
                onSelect={onSelect}
                selectedRange={selectedRange}
            />
        </span>
    );
};

export default RangeSelector;
