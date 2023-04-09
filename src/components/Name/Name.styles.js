import styled from 'styled-components';

export const StyledName = styled.a`
	grid-area: name;
	font-family: 'DM Serif Display', Arial;
	font-weight: 400;
	font-size: 1.375rem;
	line-height: 1.563rem;
	text-decoration: none;
	color: #081f32;

	&:hover {
		text-decoration: underline;
	}
`;