import React from 'react';
import SourceLink from './SourceLink';
import dayjs from 'dayjs';
import { DataSource } from '../../context/types';

const capitalize = (value: string) => {
    return value.charAt(0).toUpperCase() + value.slice(1);
};

interface Props {
    dato: string;
    type?: string;
    kilde?: DataSource;
    gradering?: number;
    dagsats?: number;
    showType?: boolean;
}

const Row = ({ dato, type, kilde, gradering, dagsats, showType }: Props) => {
    return (
        <tr>
            <td>
                <div className="TableRow__date">{dayjs(dato).format('DD.MM.YYYY')}</div>
                {type && (
                    <div className={`TableRow__type ${type}`}>
                        <span>{showType && capitalize(type)}</span>
                        {kilde && <SourceLink label={kilde} />}
                    </div>
                )}
            </td>
            <td>
                {gradering !== 0 && (
                    <div className="TableRow__degree">
                        <span>{`${gradering}%`}</span>
                        {kilde && <SourceLink label={kilde} />}
                    </div>
                )}
            </td>
            {dagsats && (
                <td>
                    <div className="TableRow__dagsats">
                        <span>{`${dagsats} kr`}</span>
                    </div>
                </td>
            )}
        </tr>
    );
};

export default Row;
