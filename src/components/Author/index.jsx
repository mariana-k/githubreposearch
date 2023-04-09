import React from 'react';
import { StyledAuthor } from './Author.styles';

const Author = (props) => {
	return <StyledAuthor href={props.href}>{props.children}</StyledAuthor>;
};

export default Author;
