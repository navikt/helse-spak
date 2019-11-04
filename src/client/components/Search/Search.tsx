import React, { useState } from 'react';
import './Search.less';
import { SearchIcon } from '../Icon';

interface SearchProps {
    onSearch: (value: string) => void;
}

const Search = ({ onSearch }: SearchProps) => {
    const [value, setValue] = useState('');

    const onSubmit = (e: React.KeyboardEvent) => {
        if (e.keyCode === 13) {
            onSearch(value);
        }
    };

    return (
        <div className="Search">
            <input
                type="text"
                value={value}
                onChange={e => setValue(e.target.value)}
                onKeyDown={onSubmit}
                placeholder="Oppgi fødselsnummer..."
            />
            <button className="Search__button" onClick={() => onSearch(value)}>
                <SearchIcon />
            </button>
        </div>
    );
};

export default Search;
