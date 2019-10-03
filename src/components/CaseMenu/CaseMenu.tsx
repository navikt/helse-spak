import React, { useState } from 'react';
import Picker from '../Picker';
import CasePicker from './CasePicker';
import ProgressBar from '../ProgressBar';
import Icon, { IconType } from '../Icon/Icon';
import { Panel } from 'nav-frontend-paneler';
import { Normaltekst } from 'nav-frontend-typografi';
import { EtikettInfo } from 'nav-frontend-etiketter';
import './CaseMenu.less';

interface Case {
    arbeidsgiver?: string;
    fom?: string;
    tom?: string;
    sykmeldingsgrad?: number;
    sykmelder?: string;
    foerstegang?: boolean;
}

const CaseMenu = ({
    arbeidsgiver = 'Sykepleierhuset AS',
    fom = '27.01.19',
    tom = '28.02.19',
    sykmeldingsgrad = 100,
    sykmelder = 'Nasse Nøff / Fjellet Legesenter',
    foerstegang = true
}: Case) => {
    return (
        <Panel className="CaseMenu">
            <div className="CaseMenu__top">
                <CasePicker />
                <Picker
                    defaultLabel="Behandling"
                    items={['test1', 'test2', 'test3']}
                />
            </div>
            {foerstegang && <EtikettInfo>Førstegang</EtikettInfo>}
            <div className="CaseMenu__info">
                <Normaltekst>
                    <Icon type={IconType.Employer} />
                    {arbeidsgiver} / {fom} - {tom} / {`${sykmeldingsgrad}%`}
                </Normaltekst>
                <Normaltekst>
                    <Icon type={IconType.Sykmelder} />
                    {sykmelder}
                </Normaltekst>
            </div>
        </Panel>
    );
};

export default CaseMenu;
