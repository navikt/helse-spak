import React, { useContext } from 'react';
import Icon, { IconType } from '../Icon';
import BarChart from './BarChart';
import InformationPanelItem from './InformationPanelItem';
import Separator, { SeparatorAlignment } from '../Separator';
import { Undertekst, Undertittel } from 'nav-frontend-typografi';
import { formatCurrency } from '../../utility/locale';
import { CaseContext } from '../../context/CaseContext';
import './InformationPanel.less';

const InformationPanel = () => {
    const { employment, salary } = useContext(CaseContext);

    const avvik = Math.abs(
        Math.floor(
            (salary.beregnetInntekt / salary.gjennomsnittligInntekt - 1) * 100
        )
    );

    const loggableValue = (value: string) => (
        <>
            {value}
            <a>Logg</a>
        </>
    );

    return (
        <div className="InformationPanel">
            <div className="InformationPanel__left">
                <Undertittel>{employment.arbeidsgiver}</Undertittel>
                <div className="InformationPanel__grid">
                    <InformationPanelItem
                        label="Arbeidsforhold"
                        value={employment.arbeidsforhold}
                    />
                    <InformationPanelItem
                        label="Startdato"
                        value={
                            employment.start
                                ? loggableValue(employment.start)
                                : ''
                        }
                    />
                    <InformationPanelItem
                        label="Sluttdato"
                        value={
                            employment.end ? loggableValue(employment.end) : '-'
                        }
                    />
                    <InformationPanelItem
                        label="Lønnstype"
                        value={salary.lønnstype || '-'}
                    />
                    <InformationPanelItem
                        label="Yrkesbeskrivelse"
                        value={employment.yrkesbeskrivelse || '-'}
                    />
                    <InformationPanelItem
                        label="Arbeidstidsordning"
                        value={employment.arbeidstidsordning || '-'}
                    />
                    <InformationPanelItem
                        label="Stillingsprosent"
                        value={loggableValue(`${employment.stillingsprosent}%`)}
                    />
                </div>
            </div>
            <Separator alignment={SeparatorAlignment.Vertical} />
            <div className="InformationPanel__mid">
                <Undertittel>Mnd. inntekt siste 3 mnd</Undertittel>
                <div className="InformationPanel__grid">
                    <InformationPanelItem
                        label="Beregnet mnd. inntekt"
                        value={`${formatCurrency(salary.beregnetInntekt)} kr`}
                        icon={IconType.Inntekstmelding}
                    />
                    <InformationPanelItem
                        label="Gj.snitt mnd. inntekt"
                        value={`${formatCurrency(
                            salary.gjennomsnittligInntekt
                        )} kr`}
                        icon={IconType.Aaregisteret}
                    />
                    <InformationPanelItem value={`Avvik: ${avvik} %`} />
                </div>
                <InformationPanelItem value="Årsinntekt" />
                <div className="InformationPanel__grid">
                    <InformationPanelItem
                        label="Omregnet årsinntekt"
                        value={`${formatCurrency(
                            salary.omregnetÅrsinntekt
                        )} kr`}
                    />
                    <InformationPanelItem
                        label="Sammenligningsgrunnl."
                        value={`${formatCurrency(
                            salary.sammenligningsgrunnlag
                        )} kr`}
                    />
                </div>
            </div>
            <Separator alignment={SeparatorAlignment.Vertical} />
            <div className="InformationPanel__right">
                <Undertittel>
                    Rapportert mnd. inntekt
                    <Icon type={IconType.Aaregisteret} />
                </Undertittel>
                <BarChart data={salary.lastTwelveMonths} />
                <Undertekst>Detaljer</Undertekst>
            </div>
        </div>
    );
};

export default InformationPanel;
