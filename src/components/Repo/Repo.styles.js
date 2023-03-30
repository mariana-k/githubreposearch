import styled from 'styled-components';

export const StyledRepo = styled.li`
	margin: 1rem;
	border-radius: 1rem;
	box-shadow: 0px 0.25rem 0.25rem rgba(51, 51, 51, 0.04),
		0px 0.25rem 1.5rem rgba(51, 51, 51, 0.24);
	border-radius: 0.25rem;
	padding: 1rem;
	box-sizing: border-box;
	display: grid;
	gap: 1rem;
	grid-template-columns: 15% 60% 25%;
	grid-template-areas:
		'image name name'
		'image author author'
		'image language rating'
		'image description watching';
`;
export const StyledAvatar = styled.a`
	grid-area: image;
`;
export const StyledAvatarImage = styled.img`
	width: 100%;
	display: block;
	border-radius: 0.25rem;
`;
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
export const StyledAuthor = styled.a`
	grid-area: author;
	font-family: 'Open Sans', Arial;
	font-weight: 400;
	font-size: 1rem;
	line-height: 1.563rem;
	color: #a5adbb;
	text-decoration: none;

	&:hover {
		text-decoration: underline;
	}
`;
export const StyledDescription = styled.div`
	grid-area: description;
	font-family: 'Open Sans', Arial;
	font-weight: 400;
	font-size: 1rem;
	line-height: 1.563rem;
	color: #a5adbb;
`;
export const StyledLanguage = styled.p`
	grid-area: language;
	margin: 0;
	font-family: 'Open Sans', Arial;
	font-weight: 400;
	font-size: 1rem;
	line-height: 1.563rem;
	color: #a5adbb;
`;
export const StyledRating = styled.div`
	grid-area: rating;
	font-family: 'Open Sans', Arial;
	font-weight: 400;
	font-size: 1rem;
	line-height: 1.563rem;
	color: #081f32;
	display: flex;
	justify-content: left;
	align-items: top;
`;
export const StyledItem = styled.div`
	margin: 0.25rem;
`;
export const StyledWatching = styled.div`
	grid-area: watching;
	font-family: 'Open Sans', Arial;
	font-weight: 400;
	font-size: 1rem;
	line-height: 1.563rem;
	color: #081f32;
	display: flex;
	justify-content: left;
	align-items: top;
`;

export const StyledItemLight = styled(StyledItem)`
	color: #a5adbb;
`;
