import React, { createContext, useState } from 'react';
import { mockData } from './mockData';
import { CaseData } from './types';
import { Case } from '../components/Timeline/types';

interface UpdatePeriodConfig {
    periodId: string;
    key: string;
    value: any;
    dayIndex: number;
}

interface CaseContextProps extends CaseData {
    selectedInterval?: Interval;
    setSelectedInterval: (interval?: Interval) => void;
    updatePeriod: (config: UpdatePeriodConfig) => void;
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

export const CaseContext = createContext<CaseContextProps>({
    ...defaultCaseData,
    setSelectedInterval: () => {},
    updatePeriod: () => {}
});

export const CaseProvider = ({ children }: CaseProviderProps) => {
    const [caseData, setCaseData] = useState<CaseData>(defaultCaseData);
    const [selectedInterval, setSelectedInterval] = useState<
        Interval | undefined
    >();

    const updatePeriod = ({
        periodId,
        key,
        value,
        dayIndex
    }: UpdatePeriodConfig) => {
        setCaseData(c => ({
            person: {
                ...c.person,
                arbeidsgivere: c.person.arbeidsgivere.map(a => ({
                    ...a,
                    perioder: a.perioder.map(p =>
                        p.id === periodId
                            ? {
                                  ...p,
                                  dager: p.dager!.map((dag, i) =>
                                      i === dayIndex
                                          ? { ...dag, [key]: value }
                                          : dag
                                  )
                              }
                            : p
                    )
                }))
            }
        }));
    };

    return (
        <CaseContext.Provider
            value={{
                ...caseData,
                selectedInterval,
                setSelectedInterval,
                updatePeriod
            }}
        >
            {children}
        </CaseContext.Provider>
    );
};
