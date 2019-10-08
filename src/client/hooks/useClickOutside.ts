import React, { useEffect } from 'react';

const hasParent = (
    child: HTMLElement | null,
    target: HTMLElement | null,
    maxDepth = 3
) => {
    let current: HTMLElement | null = child;
    let depth = 0;

    while (current && depth < maxDepth) {
        if (current === target) {
            return true;
        }
        current = current.parentElement;
        depth++;
    }

    return false;
};

export const useClickOutside = (
    ref: React.RefObject<HTMLElement>,
    isActive: boolean,
    callback: () => void
) => {
    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            if (!hasParent(e.target as HTMLElement, ref.current)) {
                callback();
            }
        };
        if (isActive && ref.current) {
            window.addEventListener('click', handleClick);
            return () => window.removeEventListener('click', handleClick);
        }
    }, [isActive, ref.current]);
};
