import React from 'react';
import Row from './Row';
import { Dag } from '../../context/types';
import 'nav-frontend-tabell-style';
import './Table.less';

interface Props {
    data?: Dag[];
    showDagsats?: boolean;
}

const Table = ({ data, showDagsats = false }: Props) => {
    if (!data) {
        return null;
    }

    return (
        <table className="Table tabell">
            <thead>
                <tr>
                    <th>Sykmeldingsperiode</th>
                    <th>Gradering</th>
                    {showDagsats && <th>Dagsats</th>}
                </tr>
            </thead>
            <tbody>
                {data.map((item, i, array) => {
                    const showType = i === 0 || array[i - 1].type !== item.type;
                    return (
                        <Row key={item.dato} showType={showType} {...item} />
                    );
                })}
            </tbody>
        </table>
    );
};

export default Table;
