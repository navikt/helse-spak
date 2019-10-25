import React, { useMemo, useState } from 'react';
import TimelineRow from './TimelineRow';
import { Range } from './types';
import './Timeline.less';
import {
    calculateLeftPercentage,
    daysInPeriod,
    overlapping, splitPeriods,
    yearsInRange
} from './calc';
import dayjs = require('dayjs');
import { Undertekst } from 'nav-frontend-typografi';

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

interface TimelineRow {
    label: string;
    type: OrganizationType;
    periods: TimelinePeriod[];
}

const timelineData: TimelineRow[] = [
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
    data: TimelineRow[];
    range: Range;
}

const Timeline = ({
    data = timelineData,
    range = Range.ONE_YEAR
}: TimelineProps) => {
    const years = yearsInRange(range);

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

    return (
        <div className="Timeline">
            <div className="Timeline__grid">
                <span />
                <span className="Timeline__top-row">
                    {yearPins.map(pin => (
                        <div
                            key={pin.year}
                            className="Timeline__year"
                            style={{
                                left: pin.left
                            }}
                        >
                            <Undertekst>{pin.year}</Undertekst>
                            <div className="Timeline__pin" />
                        </div>
                    ))}
                </span>
                {data.map(row => (
                    <TimelineRow key={row.label} {...row} range={range} />
                ))}
            </div>
        </div>
    );
};

export default Timeline;
