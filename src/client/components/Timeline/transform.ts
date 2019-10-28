import { TimelinePeriod } from './Timeline';
import {
    Case,
    Date,
    Interval,
    DatePosition,
    Row,
    HorizontallyPositioned
} from './types';
import { guid } from 'nav-frontend-js-utils';

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

const extractIntervals = (dates: Date[]): Interval[] => {
    const openCases: { [key: string]: Case } = {};
    const intervals = dates
        .map((current: Date, i: number) => {
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
                    cases: [...Object.values(openCases)],
                    id: guid()
                };
            }
        })
        .slice(0, -1)
        .filter(interval => interval !== undefined);
    return intervals as Interval[];
};

export const getIntervals = (timeline: Row[]) => {
    const dates = extractDates(timeline);
    return extractIntervals(dates);
};

export const trimElement = (element: HorizontallyPositioned) => {
    const isOutOfBounds = element.style.left < 0;
    return isOutOfBounds
        ? {
              ...element,
              style: {
                  ...element.style,
                  left: 0,
                  width: element.style.width + element.style.left
              }
          }
        : element;
};
