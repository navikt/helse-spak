import React, { useState } from 'react';
import TimelineRow from './TimelineRow';
import { Range, Interval, Case } from './types';
import { Normaltekst, Undertekst } from 'nav-frontend-typografi';
import {
    calculateLeftPercentage,
    calculatePosition,
    daysInPeriod,
    yearsInRange
} from './calc';
import { getIntervals, trimElement } from './transform';
import './Timeline.less';
import RangeSelectors from './RangeSelectors';
import SelectedInterval from './SelectedInterval';
import dayjs from 'dayjs';

export enum OrganizationType {
    PRIVATE = 'employer',
    NAV = 'nav'
}

enum PeriodStatus {
    RESOLVED = 'resolved',
    UNRESOLVED = 'unresolved',
    UNRELATED = 'unrelated'
}

export interface TimelinePeriod {
    start: string;
    end: string;
    status?: PeriodStatus;
}

interface Row {
    label: string;
    type: OrganizationType;
    periods: TimelinePeriod[];
}

const timelineData: Row[] = [
    {
        label: 'Sykepleierhuset AS',
        type: OrganizationType.PRIVATE,
        periods: [
            {
                start: '2018-11-15',
                end: '2018-12-15'
            },
            {
                start: '2019-04-15',
                end: '2019-05-15',
                status: PeriodStatus.RESOLVED
            },
            {
                start: '2019-9-01',
                end: '2019-9-30',
                status: PeriodStatus.RESOLVED
            }
        ]
    },
    {
        label: 'Hjemmehjelpen',
        type: OrganizationType.PRIVATE,
        periods: [
            {
                start: '2018-12-01',
                end: '2018-12-31',
                status: PeriodStatus.UNRESOLVED
            }
        ]
    },
    {
        label: 'Foreldrepenger',
        type: OrganizationType.NAV,
        periods: [
            {
                start: '2018-11-01',
                end: '2019-05-30',
                status: PeriodStatus.UNRELATED
            }
        ]
    }
];

interface TimelineProps {
    data: Row[];
    range: Range;
}

const Timeline = ({
    data = timelineData,
    range = Range.ONE_YEAR
}: TimelineProps) => {
    const [selectedRange, setSelectedRange] = useState<Range>(range);
    const [selectedInterval, setSelectedInterval] = useState<Interval>();

    const years = yearsInRange(selectedRange);
    const days = daysInPeriod(selectedRange);

    const yearPins = years.map(year => {
        const beginningOfYear = `${year}-01-01`;
        return {
            year,
            left: `${calculateLeftPercentage(beginningOfYear, days)}%`
        };
    });

    const firstDayInRange = dayjs().subtract(selectedRange, 'month');

    const intervals: [] | Interval[] = getIntervals(timelineData)
        .filter(
            (interval: Interval) =>
                interval &&
                interval.cases &&
                interval.cases.filter(c => (c as Case).status !== 'nav')
                    .length > 0
        )
        .filter(interval => dayjs(interval.end).isAfter(firstDayInRange));

    const positionedIntervals = intervals
        .map(interval => ({
            ...interval,
            style: {
                ...calculatePosition(interval!.start, interval!.end, days)
            }
        }))
        .map(trimElement);

    const onClickInterval = (interval: Interval) => {
        setSelectedInterval(interval);
    };

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
                {yearPins.map(pin => (
                    <div
                        key={pin.year}
                        className="Timeline__year"
                        style={{ left: pin.left }}
                    >
                        <Undertekst>{pin.year}</Undertekst>
                        <div className="Timeline__pin" />
                    </div>
                ))}
                {positionedIntervals.map(interval => (
                    <div
                        key={interval.id}
                        className="Timeline__interval"
                        style={{
                            left: `${interval.style.left}%`,
                            width: `${interval.style.width}%`
                        }}
                        onClick={() => onClickInterval(interval as Interval)}
                    />
                ))}
                <SelectedInterval interval={selectedInterval} />
                <RangeSelectors
                    selectedRange={selectedRange}
                    onSelect={setSelectedRange}
                />
            </span>
        </div>
    );
};

export default Timeline;
