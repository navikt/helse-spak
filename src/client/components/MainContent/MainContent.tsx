import React from 'react';
import Sykepengegrunnlag from '../../routes/Sykepengegrunnlag';
import { Route } from 'react-router-dom';
import './MainContent.less';

const MainContent = () => {
    return (
        <div className="MainContent">
            <Route path="/sykepengegrunnlag" component={Sykepengegrunnlag} />
        </div>
    );
};

export default MainContent;
