import React, { useMemo, useRef } from 'react';
import TimelineRow from './TimelineRow';
import YearPins from '../YearPins/YearPins';
import { useElementWidth } from '../../../hooks/useElementWidth';
import { earliestDate, extractDates, latestDate, yearsBetween } from '../calc';
import { TimelineProps } from '../Timeline';
import './TimelineRows.css';

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
                        startDate={earliest}
                        endDate={latest}
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
