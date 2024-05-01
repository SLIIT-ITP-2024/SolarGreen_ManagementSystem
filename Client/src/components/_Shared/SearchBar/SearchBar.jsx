import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import './Searchbar.scss';

const SearchBar = ({ onSearch }) => {
    const [searchValue, setSearchValue] = useState('');

    const handleSearchChange = (e) => {
        setSearchValue(e.target.value);
    };

    const handleSearchClick = () => {
        onSearch(searchValue); 
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            onSearch(searchValue); 
        }
    };

    return (
        <div className='search-bar-outer'>
            <div className="inner">
                <div className="search-container">
                    <CiSearch className="prefix-icon" />
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchValue}
                        onChange={handleSearchChange}
                        onKeyPress={handleKeyPress}
                    />
                    <button onClick={handleSearchClick}>Search</button>
                </div>
            </div>
        </div>
    );
}

export default SearchBar;
