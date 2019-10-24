import { BASE_URL } from './constants';

const caseUrl = `${BASE_URL}/api/behandlinger`;

export const getCase = () => {
    return fetch(caseUrl);
};
