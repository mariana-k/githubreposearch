import React from 'react';
import { StyledInput } from './Input.styles';

const Input = (props) => {
	return (
		<StyledInput
			type="search"
			onChange={props.handleChange}
			onKeyUp={props.handleKeyUp}
			name="search"
			value={props.searchText}
			placeholder="Search"
		/>
	);
};

export default Input;
