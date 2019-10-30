import React, { useContext, useEffect, useMemo, useState } from 'react';
import TimelineRow from './TimelineRow';
import { Range, Interval, Case, HorizontallyPositioned } from './types';
import { Normaltekst } from 'nav-frontend-typografi';
import { calculatePosition, daysInPeriod } from './calc';
import { getIntervals, trimElement } from './transform';
import './Timeline.less';
import RangeSelector from './RangeSelector';
import SelectedInterval from './SelectedInterval';
import dayjs from 'dayjs';
import Markers from './Markers';
import IntervalButton from './Interval';
import { PeriodeStatus } from '../../context/types';
import { CaseContext } from '../../context/CaseContext';

export enum OrganizationType {
    PRIVATE = 'employer',
    NAV = 'nav'
}

export interface TimelinePeriod {
    start: string;
    end: string;
    status?: PeriodeStatus;
}

interface Row {
    label: string;
    type: OrganizationType;
    periods: TimelinePeriod[];
}

interface TimelineProps {
    data: Row[];
    range?: Range;
}

const Timeline = ({ data, range = Range.ONE_YEAR }: TimelineProps) => {
    const { selectedInterval, setSelectedInterval } = useContext(CaseContext);
    const [selectedRange, setSelectedRange] = useState<Range>(range);

    const days = daysInPeriod(selectedRange);
    const firstDayInRange = dayjs().subtract(selectedRange, 'month');

    const intervals: [] | Interval[] = useMemo(
        () =>
            getIntervals(data)
                .filter(
                    (interval: Interval) =>
                        interval &&
                        interval.cases &&
                        interval.cases.filter(c => (c as Case).status !== 'nav')
                            .length > 0
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
        .map(trimElement) as (Interval & HorizontallyPositioned)[];

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
                        {...item}
                        range={selectedRange}
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
