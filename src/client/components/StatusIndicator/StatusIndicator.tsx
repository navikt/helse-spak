import React from 'react';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import { CheckIcon } from '../Icon';
import { Normaltekst } from 'nav-frontend-typografi';
import './StatusIndicator.less';

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
                <CheckIcon width={16} height={16} fill="#fff" />
            )}
        </motion.div>
    );
};

export default StatusIndicator;
