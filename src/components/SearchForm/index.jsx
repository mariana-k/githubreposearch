import React from 'react';
import { StyledSearchForm } from './SearchForm.styles';
import Input from '../Input';

const SearchForm = ({ onSearch }) => {
	return (
		<StyledSearchForm>
			<Input onSearch={onSearch} />
		</StyledSearchForm>
	);
};

export default SearchForm;
