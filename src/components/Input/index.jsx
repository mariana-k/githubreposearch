import React, { useState } from 'react';
import { StyledInput } from './Input.styles';

const Input = (props) => {
	const [searchText, setSearchText] = useState('');
	const handleChange = (e) => {
		setSearchText(e.target.value);
	};
	const handleKeyUp = () => {
		props.onSearch(searchText);
	};
	return (
		<StyledInput
			type="search"
			onChange={handleChange}
			onKeyUp={handleKeyUp}
			name="search"
			value={searchText}
			placeholder="Search"
		/>
	);
};

export default Input;
