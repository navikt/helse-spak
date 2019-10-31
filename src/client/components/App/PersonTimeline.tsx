import React, { useContext, useMemo } from 'react';
import Timeline from '../Timeline';
import { Periode } from '../../context/types';
import { CaseContext } from '../../context/CaseContext';
import { OrganizationType } from '../Timeline/types';

const mapPeriods = (periods: Periode[]) => {
    return periods.map(p => ({
        start: p.fom,
        end: p.tom,
        status: p.status
    }));
};

const PersonTimeline = () => {
    const { person } = useContext(CaseContext);

    const timelineData = useMemo(() => {
        const arbeidsgivere = person.arbeidsgivere.map(a => ({
            label: a.navn,
            periods: mapPeriods(a.perioder),
            type: OrganizationType.PRIVATE
        }));

        const ytelser = person.ytelser.map(y => ({
            label: y.navn,
            periods: mapPeriods(y.perioder),
            type: OrganizationType.NAV
        }));

        return [...arbeidsgivere, ...ytelser];
    }, [person.arbeidsgivere, person.ytelser]);

    return <Timeline data={timelineData} />;
};

export default PersonTimeline;
