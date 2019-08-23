import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import LeftMenu from '../LeftMenu';
import TopBar from '../TopBar';
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
                    </CaseProvider>
                </div>
            </div>
        </Router>
    );
};

export default App;
