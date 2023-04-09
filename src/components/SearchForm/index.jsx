import React, { useState, useCallback } from 'react';
import { StyledSearchForm } from './SearchForm.styles'
import Input from '../Input';

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
			<Input value={searchText} onChange={handleChange} onKeyUp={handleKeyUp} />
		</StyledSearchForm>
	);
};

export default SearchForm;
