import moment from 'moment';

const months = ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'];

/* Returnerer første bokstav fra de siste 12 månedene fom. nåværende måned i kronologisk rekkefølge.
 * Om nåværende måned er juli vil returverdien være ['A', 'S', 'O', 'N', 'D', 'J', 'F', 'M', 'A', 'M', 'J', 'J'].
 * @return {array} Forbokstavene til de siste 12 måneder i kronologisk rekkefølge
 */
export const lastTwelveMonths = () => {
    const currentMonth = moment().month();
    return [
        ...months.slice(currentMonth + 1),
        ...months.slice(0, currentMonth + 1)
    ];
};

/* Regner ut hvor streken som viser overgangen mellom år skal plasseres i diagrammet.
 * @param {number} width - Diagrammets bredde i piksler
 * @return {number} Strekens horisontale plassering i piksler fra venstre i diagrammet
 */
export const calculateYearPinPosition = (width: number) => {
    const monthsOffset = Math.abs(moment().month() - 11);
    const barWidth = 4;
    const barMargin = (width - barWidth * 12) / 11;
    const positionInPixels =
        (barWidth + barMargin) * monthsOffset - barMargin / 2;
    return (positionInPixels / width) * 100;
};

/* Regner ut en søyles høyde i piksler.
 * @param {number} income - Inntekten søylen representerer
 * @param {number} maxIncome - Den høyeste inntekten i diagrammet
 * @param {number} height - Diagrammets høyde i piksler
 * @return Søylens høyde i piksler
 */
export const incomeToHeight = (
    income: number,
    maxIncome: number,
    height: number
) => {
    const ratio = height / maxIncome;
    return ratio * income;
};
