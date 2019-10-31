import React from 'react';
import TopBar from '../TopBar';
import LeftMenu from '../LeftMenu';
import RightMenu from '../RightMenu';
import PersonBar from '../PersonBar';
import MainContent from '../MainContent';
import PersonTimeline from './PersonTimeline';
import { CaseProvider } from '../../context/CaseContext';
import { BrowserRouter } from 'react-router-dom';
import './App.less';

const App = () => {
    return (
        <div className="App">
            <CaseProvider>
                <TopBar />
                <PersonBar />
                <PersonTimeline />
                <BrowserRouter>
                    <div className="Content">
                        <LeftMenu />
                        <MainContent />
                        <RightMenu />
                    </div>
                </BrowserRouter>
            </CaseProvider>
        </div>
    );
};

export default App;
