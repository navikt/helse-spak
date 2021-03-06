import React from 'react';
import Chip from '../Chip';
import { useHistory } from 'react-router';
import { Element } from 'nav-frontend-typografi';
import './TaskBar.less';

interface TaskLinkProps {
    label: string;
    path: string;
    done?: boolean;
}

const TaskLink = ({ label, path, ...rest }: TaskLinkProps) => {
    const history = useHistory();
    return (
        <Chip
            label={label}
            onClick={() => {
                if (history.location.pathname !== path) {
                    history.push(path);
                }
            }}
            active={history.location.pathname.includes(path)}
            {...rest}
        />
    );
};

const TaskBar = () => {
    return (
        <div className="TaskBar">
            <Element>Mine oppgaver:</Element>
            <div className="TaskBar__tasks">
                <TaskLink label="25% avvik" path="/sykepengegrunnlag/fastsatt-inntekt" />
                <TaskLink label="Sykdomsvilkår" path="/sykdomsvilkår/sykdomsvilkår" />
            </div>
            <Element>Utførte:</Element>
            <div className="TaskBar__tasks">
                <TaskLink label="Periode" path="/sykepengeperiode/ferie" done />
            </div>
        </div>
    );
};

export default TaskBar;
