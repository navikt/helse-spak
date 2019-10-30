import React, { useEffect, useState } from 'react';
import { Normaltekst } from 'nav-frontend-typografi';
import './Tabs.less';

interface Props {
    labels: string[];
    children: React.ReactNode[];
}

const Tabs = ({ labels, children }: Props) => {
    const [activeTab, setActiveTab] = useState(0);

    if (labels.length !== children.length) {
        throw Error('Arrays `labels` and `children` have mismatching lengths');
    }

    useEffect(() => {
        if (children.length <= activeTab) {
            setActiveTab(0);
        }
    }, [children, activeTab]);

    return (
        <div className="Tabs">
            <div className="Tabs__labels">
                {labels.map((label, i) => (
                    <div
                        key={label}
                        className={`Tabs__label ${
                            activeTab === i ? 'active' : ''
                        }`}
                        onClick={() => setActiveTab(i)}
                    >
                        <Normaltekst>{label}</Normaltekst>
                    </div>
                ))}
            </div>
            <div className="Tabs__content">{children[activeTab]}</div>
        </div>
    );
};

export default Tabs;
