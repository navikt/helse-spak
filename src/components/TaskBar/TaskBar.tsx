import React from 'react';
import Chip from '../Chip';
import { Element } from 'nav-frontend-typografi';
import './TaskBar.less';

const TaskBar = () => {
    return (
        <div className="TaskBar">
            <Element>Mine oppgaver:</Element>
            <div className="TaskBar__tasks">
                <Chip label="25% avvik" active />
                <Chip label="Sykdomsvilkår" />
            </div>
            <Element>Utførte:</Element>
            <div className="TaskBar__tasks">
                <Chip label="Periode" done />
            </div>
        </div>
    );
};

export default TaskBar;
