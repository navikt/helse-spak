import React, { useEffect, useState } from 'react';

export const useElementWidth = (ref: React.RefObject<HTMLElement>) => {
    const [width, setWidth] = useState<number>(0);

    useEffect(() => {
        const handleResize = () => {
            if (ref.current) {
                setWidth(ref.current.offsetWidth);
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [ref.current]);

    return width;
};
