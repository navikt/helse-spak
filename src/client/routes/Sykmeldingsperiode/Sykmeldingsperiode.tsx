import React, { useContext, useMemo } from 'react';
import Tabs from '../../components/Tabs';
import Table from '../../components/Table';
import { EditIcon } from '../../components/Icon';
import { CaseContext } from '../../context/CaseContext';
import { Interval, OrganizationType } from '../../components/Timeline/types';
import { Arbeidsgiver, Periode, PeriodeStatus } from '../../context/types';
import './Sykmeldingsperiode.less';

const EMPTY_PERIODE = {
    fom: '',
    tom: '',
    status: PeriodeStatus.Irrelevant,
    dager: []
};

const getIntersectingPeriod = (
    arbeidsgiver: Arbeidsgiver,
    interval: Interval
): Periode =>
    arbeidsgiver.perioder.find(p => {
        if (!p.dager || p.dager.length === 0) {
            return false;
        }

        const firstDate = p.dager[0].dato;
        const lastDate = p.dager.slice(-1)[0].dato;

        return (
            (firstDate >= interval.start && firstDate <= interval.end) ||
            (lastDate >= interval.start && lastDate <= interval.end)
        );
    }) || EMPTY_PERIODE;

const Sykmeldingsperiode = () => {
    const { person, selectedInterval } = useContext(CaseContext);

    const [labels, periods] = useMemo((): [string[], Periode[]] => {
        if (!selectedInterval) {
            return [[], []];
        }

        const labels = selectedInterval.cases
            .filter(c => c.status !== OrganizationType.NAV)
            .map(c => c.label);
        const periods = person.arbeidsgivere
            .filter(a => labels.includes(a.navn))
            .map(a => getIntersectingPeriod(a, selectedInterval));

        return [labels, periods];
    }, [selectedInterval, person]);

    return (
        <div className="Sykmeldingsperiode content">
            {labels.length > 0 && labels.length === periods.length && (
                <>
                    <Tabs labels={labels}>
                        {periods.map((p: Periode, i) => (
                            <Table key={i} data={p.dager} />
                        ))}
                    </Tabs>
                    <EditIcon />
                </>
            )}
        </div>
    );
};

export default Sykmeldingsperiode;
