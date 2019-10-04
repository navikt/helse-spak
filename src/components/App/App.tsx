import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import TopBar from '../TopBar';
import LeftMenu from '../LeftMenu';
import RightMenu from '../RightMenu';
import MainContent from '../MainContent';
import { CaseProvider } from '../../context/CaseContext';
import './App.less';

const App = () => {
    return (
        <div className="App">
            <TopBar />
            <BrowserRouter>
                <div className="Content">
                    <CaseProvider>
                        <LeftMenu />
                        <MainContent />
                        <RightMenu />
                    </CaseProvider>
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;
