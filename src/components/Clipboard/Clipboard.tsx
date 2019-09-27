import React, { useEffect, useRef, useState } from 'react';
import Icon, { IconType } from '../Icon';
import { AnimatePresence, motion } from 'framer-motion';
import { copyContentsToClipboard } from './util';
import './Clipboard.less';

const animation = {
    initial: { y: 5, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: 5, opacity: 0 },
    transition: {
        duration: 0.1
    }
};

interface ClipboardProps {
    children: React.ReactNode | React.ReactNode[];
}

const Clipboard = ({ children }: ClipboardProps) => {
    const [didCopy, setDidCopy] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    const childrenClass = `Clipboard__children ${isFocused ? 'focused' : ''}`;

    const copy = (e: React.MouseEvent<HTMLElement>) => {
        e.stopPropagation();
        if (!didCopy && ref.current) {
            setDidCopy(
                copyContentsToClipboard(ref.current.firstChild as HTMLElement)
            );
        }
    };

    useEffect(() => {
        didCopy && setTimeout(() => setDidCopy(false), 2000);
    }, [didCopy]);

    return (
        <div className="Clipboard" onClick={copy}>
            <div ref={ref}>
                <div className={childrenClass}>{children}</div>
            </div>
            <button
                onClick={copy}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            >
                <AnimatePresence initial={false} exitBeforeEnter>
                    <motion.div {...animation} key={didCopy ? 'check' : 'copy'}>
                        <Icon type={didCopy ? IconType.Check : IconType.Copy} />
                    </motion.div>
                </AnimatePresence>
            </button>
        </div>
    );
};

export default Clipboard;
