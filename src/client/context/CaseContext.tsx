import React, { useEffect, useState } from 'react';
import { mockCaseData } from './mockData';
import { CaseData, Employment } from './types';
import { getCase } from '../api/caseRequests';

const defaultCaseData: CaseData = mockCaseData;

export const CaseContext = React.createContext(defaultCaseData);

interface CaseProviderProps {
    children: React.ReactNode;
}

export const CaseProvider = ({ children }: CaseProviderProps) => {
    const [caseData] = useState<CaseData>(defaultCaseData);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [fetchedCaseData, setFetchedCaseData] = useState<any>();

    useEffect(() => {
        if (!fetchedCaseData) {
            getCase()
                .then(c => setFetchedCaseData(c))
                .catch(err => console.warn(err));
        }
    }, [fetchedCaseData]);

    console.log(fetchedCaseData);

    return (
        <CaseContext.Provider value={caseData}>{children}</CaseContext.Provider>
    );
};
