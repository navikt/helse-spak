import React, { useContext } from 'react';
import Table from '../../components/Table';
import { CaseContext } from '../../context/CaseContext';
import Tabs from '../../components/Tabs';
import { Arbeidsgiver } from '../../context/types';
import { Interval } from '../../components/Timeline/types';

const getIntersectingPeriod = (
    arbeidsgiver: Arbeidsgiver,
    interval?: Interval
) => {
    return arbeidsgiver.perioder.find(p => {
        if (!p.dager || p.dager.length === 0 || !interval) {
            return false;
        }

        const firstDate = p.dager[0].dato;
        const lastDate = p.dager.slice(-1)[0].dato;

        return (
            (firstDate >= interval.start && firstDate <= interval.end) ||
            (lastDate >= interval.start && lastDate <= interval.end)
        );
    });
};

const Sykmeldingsperiode = () => {
    const { person, selectedInterval } = useContext(CaseContext);

    const labels =
        selectedInterval &&
        selectedInterval.cases
            .filter(c => c.status !== 'nav')
            .map(c => c.label);
    const perioder = person.arbeidsgivere
        .filter(a => labels && labels.includes(a.navn))
        .map(a => getIntersectingPeriod(a, selectedInterval));

    console.log(labels, perioder);

    return (
        <div className="Sykmeldingsperiode content">
            {labels && perioder && labels.length === perioder.length && (
                <Tabs labels={labels}>
                    {perioder.map((p, i) => (
                        <Table key={i} data={p.dager} />
                    ))}
                </Tabs>
            )}
        </div>
    );
};

export default Sykmeldingsperiode;
