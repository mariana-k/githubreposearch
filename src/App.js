import React, { useEffect, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	setItems,
	setQuery,
	setLoading,
	setCurrentPage,
} from './state/reducers/repos';
import SearchForm from './components/SearchForm';
import RepoList from './components/RepoList';
import Pagination from './components/Pagination';
import { StyledLoading } from './components/Loading/Loading.styles';
import { fetchRepoData } from './utils/fetchData';
const App = () => {
	const dispatch = useDispatch();
	const repos = useSelector((state) => state.repos.items);
	const query = useSelector((state) => state.repos.query);
	const loading = useSelector((state) => state.repos.loading);
	const currentPage = useSelector((state) => state.repos.currentPage);
	const [totalPages, setTotalPages] = useState(1);
	const perPage = 20;
	const performSearch = useCallback(
		(query) => {
			dispatch(setQuery(query));
			dispatch(setLoading(true));
			dispatch(fetchRepoData(query, perPage, currentPage)).then((action) => {
				dispatch(setItems(action.payload.items));
				dispatch(setLoading(false));
				setTotalPages(Math.ceil(action.payload.total_count / perPage));
			});
		},
		[currentPage, dispatch]
	);

	const handlePrevPageClick = () => {
		dispatch(setCurrentPage(currentPage - 1));
	};

	const handleNextPageClick = () => {
		dispatch(setCurrentPage(currentPage + 1));
	};

	useEffect(() => {
		performSearch(query);
	}, [currentPage, performSearch, query]);

	return (
		<>
			<SearchForm onSearch={performSearch} />
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
