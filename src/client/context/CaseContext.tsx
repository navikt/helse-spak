import React, { useState } from 'react';
import { mockCaseData } from './mockData';
import { CaseData } from './types';

const defaultCaseData: CaseData = mockCaseData;

export const CaseContext = React.createContext(defaultCaseData);

interface CaseProviderProps {
    children: React.ReactNode;
}

export const CaseProvider = ({ children }: CaseProviderProps) => {
    const [caseData] = useState<CaseData>(defaultCaseData);
    return (
        <CaseContext.Provider value={caseData}>{children}</CaseContext.Provider>
    );
};
