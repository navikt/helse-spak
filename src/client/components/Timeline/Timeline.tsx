import React, { useContext, useEffect, useMemo, useState } from 'react';
import dayjs from 'dayjs';
import Markers from './Markers';
import TimelineRow from './TimelineRow';
import RangeSelector from './RangeSelector';
import IntervalButton from './Interval';
import SelectedInterval from './SelectedInterval';
import {
    Case,
    Range,
    Interval,
    TimelinePeriod,
    OrganizationType,
    PositionedInterval
} from './types';
import { Normaltekst } from 'nav-frontend-typografi';
import { CaseContext } from '../../context/CaseContext';
import { getIntervals, trimElement } from './transform';
import { calculatePosition, daysInPeriod } from './calc';
import './Timeline.less';

interface Row {
    label: string;
    type: OrganizationType;
    periods: TimelinePeriod[];
}

interface TimelineProps {
    data: Row[];
    range?: Range;
    exclude?: OrganizationType;
}

const Timeline = ({
    data,
    range = Range.ONE_YEAR,
    exclude = OrganizationType.NAV
}: TimelineProps) => {
    const { selectedInterval, setSelectedInterval } = useContext(CaseContext);
    const [selectedRange, setSelectedRange] = useState<Range>(range);

    const days = daysInPeriod(selectedRange);
    const firstDayInRange = dayjs().subtract(selectedRange, 'month');

    const intervals: Interval[] = useMemo(
        () =>
            getIntervals(data)
                .filter(
                    (interval: Interval) =>
                        interval.cases.filter(
                            c => (c as Case).status !== exclude
                        ).length > 0
                )
                .filter((interval: Interval) =>
                    dayjs(interval.end).isAfter(firstDayInRange)
                ),
        [data, selectedRange]
    );

    const positionedIntervals = intervals
        .map(interval => ({
            ...interval,
            style: {
                ...calculatePosition(interval!.start, interval!.end, days)
            }
        }))
        .map(trimElement) as PositionedInterval[];

    const onClickInterval = (interval: Interval) => {
        setSelectedInterval(interval);
    };

    useEffect(() => {
        setSelectedInterval(undefined);
    }, [selectedRange]);

    return (
        <div className="Timeline">
            <span className="Timeline__labels">
                {data.map(item => (
                    <Normaltekst key={item.label}>{item.label}</Normaltekst>
                ))}
            </span>
            <span className="Timeline__periods">
                {data.map(item => (
                    <TimelineRow
                        key={item.label}
                        range={selectedRange}
                        {...item}
                    />
                ))}
                {positionedIntervals.map(interval => (
                    <IntervalButton
                        key={interval.id}
                        interval={interval}
                        isActive={
                            interval.id ===
                            (selectedInterval && selectedInterval.id)
                        }
                        onClick={onClickInterval}
                    />
                ))}
                <Markers range={selectedRange} />
                <SelectedInterval interval={selectedInterval} />
                <RangeSelector
                    selectedRange={selectedRange}
                    onSelect={setSelectedRange}
                />
            </span>
        </div>
    );
};

export default Timeline;
