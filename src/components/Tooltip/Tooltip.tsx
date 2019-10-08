import React from 'react';
import ReactTooltip from 'react-tooltip';
import './Tooltip.less';

interface TooltipProps {
    children: React.ReactChild;
    tip: string;
    className?: string;
    disabled?: boolean;
    place?: 'bottom' | 'top' | 'left' | 'right' | undefined;
}

const Tooltip = ({
    children,
    disabled,
    tip,
    className = 'Tooltip typo-undertekst',
    place = 'bottom'
}: TooltipProps) => {
    return (
        <>
            <ReactTooltip type="info" effect="solid" />
            <div
                data-tip={tip}
                data-place={place}
                data-class={className}
                data-tip-disable={disabled}
            >
                {children}
            </div>
        </>
    );
};

export default Tooltip;
