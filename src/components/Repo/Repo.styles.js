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