import React from 'react';
import Section from './Section';
import TaskBar from '../TaskBar';
import PersonBar from '../PersonBar';
import Sykepengegrunnlag from '../../routes/Sykepengegrunnlag';
import Separator, { SeparatorType } from '../Separator';
import { Route } from 'react-router-dom';
import './MainContent.less';

const MainContent = () => {
    return (
        <div className="MainContent">
            <Section>
                <PersonBar />
            </Section>
            <Separator />
            <TaskBar />
            <Section>
                <Separator type={SeparatorType.Dotted} />
            </Section>
            <Route path="/sykepengegrunnlag" component={Sykepengegrunnlag} />
        </div>
    );
};

export default MainContent;
