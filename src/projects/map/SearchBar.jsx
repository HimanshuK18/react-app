// components/SearchBar.js

import React from 'react';

const SearchBar = ({ handleSearch }) => {
  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    handleSearch(searchTerm);
  };

  return (
    <div>
      <h2>Search Notes</h2>
      <input type="text" onChange={handleInputChange} placeholder="Search by text or user name" />
    </div>
  );
};

export default SearchBar;
