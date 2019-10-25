import { OrganizationType, TimelinePeriod } from './Timeline';

export interface Case {
    label: string;
    status: string;
}

export interface Period {
    start: string;
    end: string;
    cases: Case[];
}

enum DatePosition {
    START = 'start',
    END = 'end'
}

interface Date {
    position: DatePosition;
    date: string;
    case: Case;
}

interface Row {
    label: string;
    type: OrganizationType;
    periods: TimelinePeriod[];
}

const reduceToDates = (dates: Date[], current: TimelinePeriod) => {
    return [
        ...dates,
        {
            position: DatePosition.START,
            date: current.start,
            case: { label: '', status: '' }
        },
        {
            position: DatePosition.END,
            date: current.end,
            case: { label: '', status: '' }
        }
    ];
};

const extractDates = (timeline: Row[]): Date[] => {
    return timeline
        .reduce((dates: Date[], current: Row) => {
            const currentDates = current.periods
                .reduce(reduceToDates, [])
                .map(date => ({
                    ...date,
                    case: { label: current.label, status: current.type }
                }));
            return [...dates, ...currentDates];
        }, [])
        .sort((a: Date, b: Date) => (a.date > b.date ? 1 : -1));
};

const extractIntervals = (dates: Date[]) => {
    const openCases: { [key: string]: object } = {};
    const intervals = dates
        .map((current: Date, i) => {
            if (current.position === DatePosition.START) {
                if (current.case) {
                    openCases[current.case.label] = current.case;
                }
            } else {
                if (current.case) {
                    delete openCases[current.case.label];
                }
            }
            if (i < dates.length - 1) {
                const next = dates[i + 1];
                return {
                    start: current.date,
                    end: next.date,
                    cases: [...Object.values(openCases)]
                };
            }
        })
        .slice(0, -1);
    if (intervals === undefined) {
        return [];
    } else {
        return intervals;
    }
};

export const getIntervals = (timeline: Row[]) => {
    const dates = extractDates(timeline);
    return extractIntervals(dates);
};
