import React from 'react';
import { StyledRating } from './Rating.styles';

const Rating = (props) => {
	return <StyledRating>{props.children}</StyledRating>;
};

export default Rating;
