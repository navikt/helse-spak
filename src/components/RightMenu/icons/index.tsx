import React, { ReactNode } from 'react';

interface IconProps {
    children?: ReactNode;
    strokeColor?: string;
}

const IconBase = ({ children, strokeColor = '#000' }: IconProps) => (
    <svg
        className="Icon"
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="-1 -1 26 26"
        style={{
            minWidth: 20,
            minHeight: 20
        }}
    >
        <g
            stroke={strokeColor}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            fill="none"
        >
            {children}
        </g>
    </svg>
);

export const AcceptedIcon = ({ strokeColor }: IconProps) => (
    <IconBase strokeColor={strokeColor}>
        <path className="st0" d="M17,8.5l-7.5,7L7,13" />
        <circle className="st0" cx="12" cy="12" r="11.5" />
    </IconBase>
);

export const DialogueIcon = ({ strokeColor }: IconProps) => (
    <IconBase strokeColor={strokeColor}>
        <path d="M8.5 12.5h-1l-4 4v-4h-3v-12h19v6.5" />
        <path d="M11.5 17.5h5.5l4.5 4v-4h2v-8h-12z" />
    </IconBase>
);

export const DocumentIcon = ({ strokeColor }: IconProps) => (
    <IconBase strokeColor={strokeColor}>
        <path d="M20.5 23.5h-17v-23h11l6 6zM14.5.5v6h6" />
    </IconBase>
);

export const HistoryIcon = ({ strokeColor }: IconProps) => (
    <IconBase strokeColor={strokeColor}>
        <path d="M1 9.007l3 4.5 3.5-4M4.006 13.507c-.756-6.084 3.901-10.801 9.144-10.994 5.243-.192 9.65 3.901 9.843 9.145.195 5.243-3.9 9.65-9.144 9.843M13.5 7v5.5h5" />
    </IconBase>
);

export const PersonIcon = ({ strokeColor }: IconProps) => (
    <IconBase strokeColor={strokeColor}>
        <path d="M9.5 14.281v2.719l-5.009 1.789c-1.194.427-1.991 1.558-1.991 2.825v1.886h19v-1.886c0-1.268-.797-2.398-1.991-2.825l-5.009-1.789v-2.906" />
        <ellipse cx="11.875" cy="9" rx="5" ry="6" />
        <path d="M16.828 8.453l-.453.047c-1.703.328-2.797-.289-3.734-1.93-.563 1.078-2.322 1.93-3.766 1.93-.711 0-1.323-.146-1.936-.466" />
    </IconBase>
);
