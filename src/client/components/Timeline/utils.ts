import moment, { Moment } from 'moment';

export const toDate = (dateString: string | Moment) => {
    return moment(dateString, ['DD.MM.YYYY', 'YYYY-MM-DD']).format(
        'DD.MM.YYYY'
    );
};
