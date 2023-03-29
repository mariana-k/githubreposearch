import React, { useState, useRef } from 'react';

const SearchForm = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');

  const queryRef = useRef(null);

  const onSearchChange = e => {
    setSearchText(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    onSearch(queryRef.current.value);
    e.currentTarget.reset();
  }

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <label className="is-hidden" htmlFor="search">Search</label>
      <input type="search"
             onChange={onSearchChange}
             name="search"
			 value={searchText}
             ref={queryRef}
             placeholder="Search..." />
    </form>
  );
};

export default SearchForm;