import React, { useMemo, useRef } from 'react';
import TimelineRow from './TimelineRow';
import YearPins from '../YearPins';
import { useElementWidth } from '../../../hooks';
import { earliestDate, extractDates, latestDate, yearsBetween } from '../calc';
import { TimelineProps } from '../Timeline';
import './TimelineRows.less';

const TimelineRows = ({ rows }: TimelineProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const width = useElementWidth(ref);

    const [years, earliest, latest] = useMemo(() => {
        const dates = extractDates(rows);
        return [yearsBetween(dates), earliestDate(dates), latestDate(dates)];
    }, [rows]);

    return (
        <div className="TimelineRows" ref={ref}>
            {ref.current && (
                <>
                    <YearPins
                        years={years}
                        start={earliest}
                        end={latest}
                        width={width}
                    />
                    {rows.map((row, i) => (
                        <TimelineRow
                            key={`perioderad-${i}`}
                            label={row.label}
                            dates={row.periods}
                            earliest={earliest}
                            latest={latest}
                            width={width}
                        />
                    ))}
                </>
            )}
        </div>
    );
};

export default TimelineRows;
