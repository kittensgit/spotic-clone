import React, { FC, useState } from 'react';

import searchIcon from 'assets/search.png';

import styles from './Seacrh.module.css';

const Search: FC = () => {
    const [search, setSearch] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    return (
        <div className={styles.search}>
            <input
                value={search}
                onChange={handleChange}
                placeholder="Enter a dish name"
            />
        </div>
    );
};

export default Search;
