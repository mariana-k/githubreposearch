import styled from 'styled-components';

export const StyledRepo = styled.li`
	margin: 1rem;
	display: grid;
	gap: 0.25rem;
	grid-template-columns: 25% 50% 25%;
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
	width: 6rem;
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
	font-size: 1em;
	line-height: 1.563rem;
  color: #A5ADBB;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
export const StyledDescription = styled.div`
	grid-area: description;
  font-family: 'Open Sans', Arial;
	font-weight: 400;
	font-size: 1em;
	line-height: 1.563rem;
  color: #A5ADBB;
`;
export const StyledLanguage = styled.p`
	grid-area: language;
	margin: 0;
  font-family: 'Open Sans', Arial;
	font-weight: 400;
	font-size: 1em;
	line-height: 1.563rem;
  color: #A5ADBB;
`;
export const StyledRating = styled.div`
	grid-area: rating;
  font-family: 'Open Sans', Arial;
	font-weight: 400;
	font-size: 1em;
	line-height: 1.563rem;
  color: #081F32;
`;

export const StyledWatching = styled.div`
	grid-area: watching;
  font-family: 'Open Sans', Arial;
	font-weight: 400;
	font-size: 1em;
	line-height: 1.563rem;
  color: #081F32;
`;
