import React from 'react';
import Sykmeldingsperiode from '../../routes/Sykmeldingsperiode';
import Sykepengegrunnlag from '../../routes/Sykepengegrunnlag';
import { Route } from 'react-router-dom';
import './MainContent.less';

const MainContent = () => {
    return (
        <div className="MainContent">
            <Route path="/sykmeldingsperiode" component={Sykmeldingsperiode} />
            <Route path="/sykepengegrunnlag" component={Sykepengegrunnlag} />
        </div>
    );
};

export default MainContent;
