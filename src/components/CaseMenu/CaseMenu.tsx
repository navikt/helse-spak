import React from 'react';
import CasePicker from './CasePicker';
import Progresjonsbar from '../Progresjonsbar/Progresjonsbar';
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
            </div>
            {foerstegang && <EtikettInfo>Førstegangs.</EtikettInfo>}
            <div className="CaseMenu__info">
                <Normaltekst>
                    <Icon type={IconType.Arbeidsgiver} />
                    {arbeidsgiver} / {fom} - {tom} / {`${sykmeldingsgrad}%`}
                </Normaltekst>
                <Normaltekst>
                    <Icon type={IconType.Sykmelder} />
                    {sykmelder}
                </Normaltekst>
            </div>
            <Progresjonsbar current={1} total={2} />
        </Panel>
    );
};

export default CaseMenu;
