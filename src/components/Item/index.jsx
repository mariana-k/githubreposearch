import React from 'react';
import { StyledItem } from './Item.styles';

const Item = (props) => {
	return <StyledItem>{props.children}</StyledItem>;
};

export default Item;
