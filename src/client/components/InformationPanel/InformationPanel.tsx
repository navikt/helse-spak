import React, { useContext } from 'react';
import BarChart from './BarChart';
import InformationPanelItem from './InformationPanelItem';
import Separator, { SeparatorAlignment } from '../Separator';
import Icon, { IconType } from '../Icon';
import { formatCurrency } from '../../utility/locale';
import { CaseContext } from '../../context/CaseContext';
import { Undertekst, Undertittel } from 'nav-frontend-typografi';
import './InformationPanel.less';

const InformationPanel = () => {
    const { employment, salary } = useContext(CaseContext);

    const avvik = (val1: number, val2: number) =>
        Math.abs(Math.floor((val1 / val2 - 1) * 100));

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
                        value={employment.start}
                    />
                    <InformationPanelItem
                        label="Sluttdato"
                        value={employment.end || '-'}
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
                        value={`${employment.stillingsprosent}%`}
                    />
                    <InformationPanelItem
                        label="Dato siste lønnsendring"
                        value="-"
                    />
                    <InformationPanelItem
                        label="Dato endret stillingsprosent"
                        value="-"
                    />
                    <InformationPanelItem
                        label="Antall timer full stilling"
                        value="-"
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
                    <InformationPanelItem
                        label="Avvik"
                        value={`${avvik(
                            salary.beregnetInntekt,
                            salary.gjennomsnittligInntekt
                        )} %`}
                    />
                </div>
                <Undertittel>Årsinntekt</Undertittel>
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
                    <InformationPanelItem
                        label="Avvik"
                        value={`${avvik(
                            salary.omregnetÅrsinntekt,
                            salary.sammenligningsgrunnlag
                        )} %`}
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
