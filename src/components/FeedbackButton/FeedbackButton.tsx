import React from 'react';
import { Normaltekst } from 'nav-frontend-typografi';
import './FeedbackButton.less';

const FeedbackButton = () => {
    return (
        <button className="FeedbackButton">
            <Normaltekst>Hva mangler?</Normaltekst>
        </button>
    );
};

export default FeedbackButton;
