import React from 'react';
import { StyledName } from './Name.styles';

const Name = (props) => {
	return <StyledName href={props.href}>{props.children}</StyledName>;
};

export default Name;
