import React from 'react';
import { StyledAvatar } from './Avatar.styles';

const AvatarImage = (props) => {
	return (
		<StyledAvatar href={props.href}>
			{props.children}
		</StyledAvatar>
	);
};

export default AvatarImage;
