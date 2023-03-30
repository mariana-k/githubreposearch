import React from 'react';
import { useDispatch } from 'react-redux';
import { StyledPagination, StyledButton, StyledActiveButton } from './Pagination.styles';
import { setCurrentPage } from '../../state/reducers/repos';
const Pagination = (props) => {
	const dispatch = useDispatch();
	const { handleNextPageClick, handlePrevPageClick, currentPage, totalPages } =
		props;
	const pageNeighbours = 4;
	const pagesToShow = pageNeighbours * 2 + 1;
	let startPage = Math.max(1, currentPage - pageNeighbours);
	let endPage = Math.min(totalPages, startPage + pagesToShow - 1);

	if (totalPages < pagesToShow) {
		startPage = 1;
		endPage = totalPages;
	} else if (currentPage <= pageNeighbours) {
		endPage = pagesToShow;
	} else if (currentPage > totalPages - pageNeighbours) {
		startPage = totalPages - pagesToShow + 1;
	}
	const handlePageClick = (page) => {
		dispatch(setCurrentPage(page));
	};
	const pages = Array.from(
		{ length: endPage - startPage + 1 },
		(_, index) => startPage + index
	);
	const renderPageNumbers = pages.map((page) => {
		return (
			<div key={page}>
				{currentPage === page ? (
					<StyledActiveButton onClick={() => handlePageClick(page)}>
						{page}
					</StyledActiveButton>
				) : (
					<StyledButton onClick={() => handlePageClick(page)}>
						{page}
					</StyledButton>
				)}
			</div>
		);
	});
	return (
		<StyledPagination>
			<StyledButton onClick={handlePrevPageClick}>Previous</StyledButton>
			{renderPageNumbers}
			<StyledButton onClick={handleNextPageClick}>Next</StyledButton>
		</StyledPagination>
	);
};

export default Pagination;
