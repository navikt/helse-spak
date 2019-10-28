import React from 'react';
import dayjs from 'dayjs';
import { Interval } from './types';
import { Normaltekst } from 'nav-frontend-typografi';

interface SelectedIntervalProps {
    interval?: Interval;
}

const SelectedInterval = ({ interval }: SelectedIntervalProps) => {
    const start = interval && dayjs(interval.start).format('DD.MM.YY');
    const end = interval && dayjs(interval.end).format('DD.MM.YY');

    return (
        <span className="Timeline__selected-interval">
            {interval && (
                <>
                    <Normaltekst>{`${start} - ${end}`}</Normaltekst>
                    {interval.cases.map(c => (
                        <Normaltekst key={c.label}>
                            {c.label}
                        </Normaltekst>
                    ))}
                </>
            )}
        </span>
    );
};

export default SelectedInterval;
