import React from 'react';
import Multiselect from '../Multiselect';
import { Flatknapp, Knapp } from 'nav-frontend-knapper';
import { Fieldset, Input, Radio, TextareaControlled } from 'nav-frontend-skjema';
import { Normaltekst, Undertittel, Element } from 'nav-frontend-typografi';
import './ActionPanel.less';

const ActionPanel = () => {
    return (
        <div className="ActionPanel">
            <Undertittel>Begrunnelse for fastsettelse</Undertittel>
            <div className="ActionPanel__content">
                <div className="ActionPanel__left">
                    <Multiselect
                        label="Begrunnelse for resultat"
                        options={[
                            { value: 'test_1', label: 'etikett1' },
                            { value: 'test_2', label: 'etikett2' },
                            { value: 'test_3', label: 'etikett3' },
                            { value: 'test_4', label: 'etikett4' },
                            { value: 'test_5', label: 'etikett5' }
                        ]}
                    />
                    <TextareaControlled
                        label="Vurdering"
                        placeholder="Videre begrunnelse ved behov for utdyping"
                        defaultValue=""
                    />
                </div>
                <div className="ActionPanel__right">
                    <Fieldset legend="Skjønnsmessig fastsettelse">
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
            </div>
            <Knapp>Ferdig</Knapp>
            <Flatknapp>Avbryt</Flatknapp>
        </div>
    );
};

export default ActionPanel;
