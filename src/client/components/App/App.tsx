import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import TopBar from '../TopBar';
import LeftMenu from '../LeftMenu';
import RightMenu from '../RightMenu';
import MainContent from '../MainContent';
import { CaseProvider } from '../../context/CaseContext';
import './App.less';
import PersonBar from '../PersonBar';
import Timeline from '../Timeline';

const App = () => {
    return (
        <div className="App">
            <CaseProvider>
                <TopBar />
                <PersonBar />
                <Timeline />
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
