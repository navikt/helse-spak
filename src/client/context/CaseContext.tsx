import React, { useState } from 'react';
import { mockData } from './mockData';
import { CaseData } from './types';
import { Case } from '../components/Timeline/types';

interface CaseContextProps extends CaseData {
    selectedInterval?: Interval;
    setSelectedInterval: (interval?: Interval) => void;
}

interface CaseProviderProps {
    children: React.ReactNode;
}

interface Interval {
    start: string;
    end: string;
    cases: Case[];
    id: string;
}

const defaultCaseData: CaseData = mockData;

export const CaseContext = React.createContext<CaseContextProps>({
    ...defaultCaseData,
    setSelectedInterval: () => {}
});

export const CaseProvider = ({ children }: CaseProviderProps) => {
    const [caseData] = useState<CaseData>(defaultCaseData);
    const [selectedInterval, setSelectedInterval] = useState<
        Interval | undefined
    >();

    return (
        <CaseContext.Provider
            value={{
                ...caseData,
                selectedInterval,
                setSelectedInterval
            }}
        >
            {children}
        </CaseContext.Provider>
    );
};
