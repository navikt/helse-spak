import React from 'react';
import Chip from '../Chip';
import { useHistory } from 'react-router';
import { Element } from 'nav-frontend-typografi';
import './TaskBar.less';

interface TaskLinkProps {
    label: string;
    path: string;
}

const TaskLink = ({ label, path }: TaskLinkProps) => {
    const history = useHistory();
    return (
        <Chip
            label={label}
            onClick={() => history.push(path)}
            active={history.location.pathname.includes(path)}
        />
    );
};

const TaskBar = () => {
    return (
        <div className="TaskBar">
            <Element>Mine oppgaver:</Element>
            <div className="TaskBar__tasks">
                <TaskLink label="25% avvik" path="/sykepengegrunnlag" />
                <TaskLink label="Sykdomsvilkår" path="/sykdomsvilkår" />
            </div>
            <Element>Utførte:</Element>
            <div className="TaskBar__tasks">
                <TaskLink label="Periode" path="/sykepengeperiode" />
            </div>
        </div>
    );
};

export default TaskBar;
