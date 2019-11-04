import React from 'react';
import SourceLink from './SourceLink';
import dayjs from 'dayjs';
import TypeSelect from './TypeSelect';
import { DagType, DataSource } from '../../context/types';

const capitalize = (value: string) => {
    return value.charAt(0).toUpperCase() + value.slice(1);
};

interface Props {
    dato: string;
    type?: DagType;
    kilde?: DataSource;
    gradering?: number;
    dagsats?: number;
    showType?: boolean;
    isEditing?: boolean;
    onUpdateType: (type: DagType) => void;
}

const Row = ({
    dato,
    type,
    kilde,
    gradering,
    dagsats,
    showType,
    isEditing,
    onUpdateType
}: Props) => {
    return (
        <tr>
            <td>
                <div className="TableRow__date">
                    {dayjs(dato).format('DD.MM.YYYY')}
                </div>
                {type && (
                    <div className={`TableRow__type ${type}`}>
                        {isEditing && type !== DagType.Helg ? (
                            <TypeSelect selected={type} onSelect={onUpdateType} />
                        ) : (
                            <span>{showType && capitalize(type)}</span>
                        )}
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
