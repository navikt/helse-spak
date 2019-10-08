import React from 'react';

const CopyIcon = ({ fill = '#3e3832' }) => {
    return (
        <g
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <g stroke={fill} strokeWidth="1.75">
                <g transform="translate(4, 4)">
                    <polygon points="4.4408921e-14 19.1729323 4.4408921e-14 4.5112782 10.1503759 4.5112782 10.1503759 19.1729323" />
                    <polyline points="5.63909774 2.19924812 5.63909774 -2.69118061e-13 15.7894737 -2.69118061e-13 15.7894737 14.6616541 13.2518797 14.6616541" />
                </g>
            </g>
        </g>
    );
};

export default CopyIcon;
