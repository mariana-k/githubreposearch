import React from 'react';
import { StyledButton, StyledActiveButton } from './Button.styles';

const Button = (props) => {
	return props.isActive ? (
		<StyledActiveButton onClick={props.onClick}>
			{props.children}
		</StyledActiveButton>
	) : (
		<StyledButton onClick={props.onClick} disabled={props.isDisabled}>{props.children}</StyledButton>
	);
};

export default Button;
