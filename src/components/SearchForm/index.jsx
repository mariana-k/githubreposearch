import React, { useState, useCallback } from 'react';
import { StyledSearchForm, StyledInput } from './SearchForm.styles'

const SearchForm = ({ onSearch }) => {
	const [searchText, setSearchText] = useState('');
	const handleChange = (e) => {
		setSearchText(e.target.value)
	};
	const handleKeyUp = useCallback(
		() => {
			onSearch(searchText);
		}, [onSearch, searchText]
	);

	return (
		<StyledSearchForm>
			<StyledInput
				type="search"
				onChange={handleChange}
				onKeyUp={handleKeyUp}
				name="search"
				value={searchText}
				placeholder="Search"
			/>
		</StyledSearchForm>
	);
};

export default SearchForm;
