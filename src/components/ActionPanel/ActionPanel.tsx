import React from 'react';
import { Flatknapp, Knapp } from 'nav-frontend-knapper';
import { Fieldset, Input, Radio, Select, TextareaControlled } from 'nav-frontend-skjema';
import { Normaltekst, Undertittel, Element } from 'nav-frontend-typografi';
import './ActionPanel.less';

const ActionPanel = () => {
    return (
        <div className="ActionPanel">
            <Undertittel>Begrunnelse for fastsettelse</Undertittel>
            <div className="ActionPanel__content">
                <div className="ActionPanel__left">
                    <Select label="Begrunnelse for resultat">
                        <option>Velg begrunnelse</option>
                        <option>test 1</option>
                        <option>test 2</option>
                        <option>test 3</option>
                    </Select>
                    <Fieldset legend="Skjønnsmessig fastsettelse av sykepengegrunnlaget">
                        <Radio
                            label={
                                <div className="ActionPanel__radio">
                                    <Normaltekst>
                                        Omregnet årsinntekt legges til grunn
                                    </Normaltekst>
                                    <Element>204 000,00 kr</Element>
                                </div>
                            }
                            name="fastsettelse"
                        />
                        <Radio
                            label={
                                <div className="ActionPanel__radio">
                                    <Normaltekst>
                                        Skjønnsmessig fastsettelse av inntekt
                                    </Normaltekst>
                                    <Input label="" placeholder="Beløp" />
                                </div>
                            }
                            name="fastsettelse"
                        />
                    </Fieldset>
                </div>
                <div className="ActionPanel__right">
                    <TextareaControlled label="Vurdering" defaultValue="" />
                </div>
            </div>
            <Knapp>Ferdig</Knapp>
            <Flatknapp>Avbryt</Flatknapp>
        </div>
    );
};

export default ActionPanel;
