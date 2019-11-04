import React, { useContext } from 'react';
import Row from './Row';
import { CaseContext } from '../../context/CaseContext';
import { Dag, DagType } from '../../context/types';
import 'nav-frontend-tabell-style';
import './Table.less';

interface Props {
    data?: Dag[];
    showDagsats?: boolean;
    isEditing?: boolean;
    metaData?: { periodeId: string };
}

const Table = ({
    data,
    metaData,
    showDagsats = false,
    isEditing = false
}: Props) => {
    const { updatePeriod } = useContext(CaseContext);

    if (!data) {
        return null;
    }

    const onUpdateDagType = (newType: DagType, index: number) => {
        const id = metaData && metaData.periodeId;
        if (id) {
            updatePeriod({
                periodId: id,
                key: 'type',
                value: newType,
                dayIndex: index
            });
        }
    };

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
                        <Row
                            key={item.dato}
                            showType={showType}
                            isEditing={isEditing}
                            onUpdateType={type => onUpdateDagType(type, i)}
                            {...item}
                        />
                    );
                })}
            </tbody>
        </table>
    );
};

export default Table;
