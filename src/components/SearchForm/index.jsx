import React, { useState, useRef } from 'react';
import { StyledSearchForm, StyledInput } from './SearchForm.styles'

const SearchForm = ({ onSearch }) => {
	const [searchText, setSearchText] = useState('');

	const queryRef = useRef(null);

	const onSearchChange = (e) => {
		setSearchText(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		onSearch(queryRef.current.value);
		e.currentTarget.reset();
	};

	return (
		<StyledSearchForm onSubmit={handleSubmit}>
			<StyledInput
				type="search"
				onChange={onSearchChange}
				name="search"
				value={searchText}
				ref={queryRef}
				placeholder="Search..."
			/>
		</StyledSearchForm>
	);
};

export default SearchForm;
