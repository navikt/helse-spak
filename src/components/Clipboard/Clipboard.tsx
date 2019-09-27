import React, { useEffect, useRef, useState } from 'react';
import Icon from 'nav-frontend-ikoner-assets';
import { Undertekst } from 'nav-frontend-typografi';
import { motion, AnimatePresence } from 'framer-motion';
import { copyContentsToClipboard } from './util';
import './Clipboard.less';

const animation = {
    initial: { y: -10, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: 10, opacity: 0 },
    transition: {
        duration: 0.2
    }
};

interface ClipboardProps {
    children: React.ReactNode | React.ReactNode[]
}

const Clipboard = ({ children }: ClipboardProps) => {
    const [minWidth, setMinWidth] = useState(0);
    const [didCopy, setDidCopy] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    const copy = () => {
        if (!didCopy && ref.current) {
            setDidCopy(
                copyContentsToClipboard(ref.current.firstChild as HTMLElement)
            );
        }
    };

    useEffect(() => {
        didCopy && setTimeout(() => setDidCopy(false), 2000);
    }, [didCopy]);

    useEffect(() => {
        setMinWidth((ref.current && ref.current.offsetWidth) || 0);
    }, [ref.current]);

    return (
        <div className="Clipboard">
            <AnimatePresence initial={false}>
                {didCopy ? (
                    <motion.div key="Clipboard__copytext" {...animation}>
                        <Undertekst className="Clipboard__copytext">
                            Kopiert
                            <Icon kind="ok-sirkel-fyll" size={14} />
                        </Undertekst>
                    </motion.div>
                ) : (
                    <motion.div
                        ref={ref}
                        key="Clipboard__children"
                        className="Clipboard__children"
                        {...animation}
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>
            <button onClick={copy} style={{ marginLeft: minWidth + 8 }}>
                KOPIÉR
            </button>
        </div>
    );
};

export default Clipboard;
