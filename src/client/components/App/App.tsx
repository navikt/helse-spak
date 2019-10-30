import React, { useContext, useMemo } from 'react';
import { BrowserRouter } from 'react-router-dom';
import TopBar from '../TopBar';
import LeftMenu from '../LeftMenu';
import Timeline from '../Timeline';
import RightMenu from '../RightMenu';
import PersonBar from '../PersonBar';
import MainContent from '../MainContent';
import { Periode } from '../../context/types';
import { OrganizationType } from '../Timeline/Timeline';
import { CaseContext, CaseProvider } from '../../context/CaseContext';
import './App.less';

const mapPeriods = (periods: Periode[]) => {
    return periods.map(p => ({
        start: p.fom,
        end: p.tom,
        status: p.status
    }));
};

const App = () => {
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

    return (
        <div className="App">
            <CaseProvider>
                <TopBar />
                <PersonBar />
                <Timeline data={timelineData} />
                <BrowserRouter>
                    <div className="Content">
                        <LeftMenu />
                        <MainContent />
                        <RightMenu />
                    </div>
                </BrowserRouter>
            </CaseProvider>
        </div>
    );
};

export default App;
