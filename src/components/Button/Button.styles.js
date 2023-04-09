import styled from 'styled-components';

export const StyledButton = styled.button`
	background: none;
	color: inherit;
	border: none;
	padding: 0;
	cursor: pointer;
	outline: inherit;
	font-family: 'Archivo', Arial;
	font-style: normal;
	font-weight: 600;
	font-size: 1.125rem;
	line-height: 1.25rem;
	margin: 0.5rem;

	:disabled {
		color: #a5adbb;
		cursor: not-allowed;
		pointer-events: all;
	}
`;

export const StyledActiveButton = styled(StyledButton)`
	border-bottom: 0.188rem solid #65b79a;
`;

