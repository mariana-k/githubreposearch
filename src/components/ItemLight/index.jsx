import React from 'react';
import { StyledItemLight } from './ItemLight.styles';

const ItemLight = (props) => {
	return <StyledItemLight>{props.children}</StyledItemLight>;
};

export default ItemLight;
