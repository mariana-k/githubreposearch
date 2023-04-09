import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { StyledInput } from './Input.styles';
import {
	setCurrentPage,
} from '../../state/reducers/repos';

const Input = (props) => {
	const [query, setQuery] = useState('');
	const dispatch = useDispatch();
	const handleChange = (e) => {
		setQuery(e.target.value);
	};
	const handleKeyUp = () => {
		dispatch(setCurrentPage(1))
		props.onSearch(query);
	};
	return (
		<StyledInput
			type="search"
			onChange={handleChange}
			onKeyUp={handleKeyUp}
			name="search"
			value={query}
			placeholder="Search"
		/>
	);
};

export default Input;
