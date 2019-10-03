import React from 'react';
import classNames from 'classnames';
import { Normaltekst } from 'nav-frontend-typografi';
import { motion } from 'framer-motion';
import './StatusIndicator.less';
import Icon, { IconType } from '../Icon';

interface StatusIndicatorProps {
    taskCount: number;
}

const StatusIndicator = ({ taskCount }: StatusIndicatorProps) => {
    const className = classNames(
        'StatusIndicator',
        taskCount === 0 && 'solved'
    );

    return (
        <motion.div
            className={className}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {taskCount > 0 && <Normaltekst>{taskCount}</Normaltekst>}
            {taskCount === 0 && (
                <Icon
                    type={IconType.Check}
                    size={12}
                    fill="#fff"
                />
            )}
        </motion.div>
    );
};

export default StatusIndicator;
