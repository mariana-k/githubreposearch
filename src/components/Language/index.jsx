import React from 'react';
import { StyledLanguage } from './Language.styles';

const Language = (props) => {
	return <StyledLanguage>{props.children}</StyledLanguage>;
};

export default Language;
