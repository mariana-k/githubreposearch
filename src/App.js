import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setQuery, setCurrentPage } from './state/reducers/repos';
import SearchForm from './components/SearchForm';
import RepoList from './components/RepoList';
import Pagination from './components/Pagination';
import { StyledLoading } from './components/Loading/Loading.styles';
import { fetchRepoData } from './utils/fetchData';
const App = () => {
	const dispatch = useDispatch();
	const repos = useSelector((state) => state.repos.repoData[0].items);
	const query = useSelector((state) => state.repos.query);
	const loading = useSelector((state) => state.repos.loading);
	const currentPage = useSelector((state) => state.repos.currentPage);
	const totalPages = useSelector((state) => state.repos.totalPages);
	const perPage = 20;
	const handlePrevPageClick = () => {
		dispatch(setCurrentPage(currentPage - 1));
	};

	const handleNextPageClick = () => {
		dispatch(setCurrentPage(currentPage + 1));
	};

	const handleOnSearch = (query) => {
		dispatch(setQuery(query));
	};

	useEffect(() => {
		const performSearch = () => {
			dispatch(setQuery(query));
			dispatch(fetchRepoData(query, perPage, currentPage));
		};
		

		performSearch(query);
	}, [currentPage, dispatch, query]);
	console.log(repos)
	return (
		<>
			<SearchForm onSearch={handleOnSearch} />
			<div>
				{loading ? (
					<StyledLoading>Loading...</StyledLoading>
				) : (
					<>
						<RepoList data={repos} />
						{totalPages > 1 && (
							<Pagination
								handlePrevPageClick={handlePrevPageClick}
								handleNextPageClick={handleNextPageClick}
								currentPage={currentPage}
								totalPages={totalPages}
							/>
						)}
					</>
				)}
			</div>
		</>
	);
};

export default App;
