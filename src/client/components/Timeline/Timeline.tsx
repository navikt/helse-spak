import React, { useState } from 'react';
import TimelineRow from './TimelineRow';
import { Range } from './types';
import { Normaltekst, Undertekst } from 'nav-frontend-typografi';
import {
    calculateLeftPercentage,
    calculatePosition,
    daysInPeriod,
    yearsInRange
} from './calc';
import { getIntervals, Case, Period } from './transform';
import './Timeline.less';
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

const intervals = getIntervals(timelineData).filter(
    interval =>
        interval &&
        interval.cases &&
        interval.cases.filter(c => (c as Case).status !== 'nav').length > 0
);

interface TimelineProps {
    data: Row[];
    range: Range;
}

const Timeline = ({
    data = timelineData,
    range = Range.ONE_YEAR
}: TimelineProps) => {
    const years = yearsInRange(range);
    const days = daysInPeriod(range);

    const [selectedInterval, setSelectedInterval] = useState<Period>();

    const yearPins = years.map(year => {
        const beginningOfYear = `${year}-01-01`;
        return {
            year,
            left: `${calculateLeftPercentage(
                beginningOfYear,
                daysInPeriod(range)
            )}%`
        };
    });

    const positionedIntervals = intervals.map(interval => ({
        ...interval,
        ...calculatePosition(interval!.start, interval!.end, days)
    }));

    const onClickInterval = (interval: Period) => {
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
                    <TimelineRow key={item.label} {...item} range={range} />
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
                        key={(interval as Period).start}
                        className="Timeline__interval"
                        style={{
                            left: `${interval.left}%`,
                            width: `${interval.width}%`
                        }}
                        onClick={() => onClickInterval(interval as Period)}
                    />
                ))}
                <span className="Timeline__period-info">
                    {selectedInterval && (
                        <>
                            <Normaltekst>
                                {`${dayjs(selectedInterval.start).format(
                                    'DD.MM.YYYY'
                                )} - ${dayjs(selectedInterval.end).format(
                                    'DD.MM.YYYY'
                                )}`}
                            </Normaltekst>
                            {selectedInterval.cases.map(c => (
                                <Normaltekst key={c.label}>
                                    {c.label}
                                </Normaltekst>
                            ))}
                        </>
                    )}
                </span>
            </span>
        </div>
    );
};

export default Timeline;
