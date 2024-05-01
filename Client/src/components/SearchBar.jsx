
import React from 'react';
import './_Shared/SearchBar/Searchbar.scss';

const SearchBar = ({ setSearchQuery }) => {
  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className='search-bar-outer'>
      <div className="inner">
       
      <div class="search-container">
            <CiSearch className="prefix-icon"/>
            <input type="text" placeholder="Search..." />
            <button>Search</button>
        </div>


      </div>
    </div>
  );
};

export default SearchBar;
