import React from 'react';
import { StyledAvatarImage } from './AvatarImage.styles';

const AvatarImage = (props) => {
	return <StyledAvatarImage src={props.src} alt={props.alt} />;
};

export default AvatarImage;
