import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	StyledPagination,
} from './Pagination.styles';

import { setCurrentPage } from '../../state/reducers/repos';
import Button from '../Button';
const Pagination = (props) => {
	const dispatch = useDispatch();
	const currentPage = useSelector((state) => state.repos.currentPage)
	const { handleNextPageClick, handlePrevPageClick, totalPages } =
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
				<Button
					onClick={() => handlePageClick(page)}
					isActive={currentPage === page}
				>
					{page}
				</Button>
			</div>
		);
	});
	return (
		<StyledPagination>
			<Button onClick={handlePrevPageClick} isDisabled={currentPage < 2}>Previous</Button>
			{renderPageNumbers}
			<Button onClick={handleNextPageClick}>Next</Button>
		</StyledPagination>
	);
};

export default Pagination;
