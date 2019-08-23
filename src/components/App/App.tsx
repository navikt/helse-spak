import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import TopBar from '../TopBar';
import LeftMenu from '../LeftMenu';
import RightMenu from '../RightMenu';
import MainContent from '../MainContent';
import { CaseProvider } from '../../context/CaseContext';
import './App.less';

const App = () => {
    return (
        <Router>
            <div className="App">
                <TopBar />
                <div className="Content">
                    <CaseProvider>
                        <LeftMenu />
                        <MainContent />
                        <RightMenu />
                    </CaseProvider>
                </div>
            </div>
        </Router>
    );
};

export default App;
