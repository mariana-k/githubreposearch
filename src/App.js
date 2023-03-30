import React, { useEffect, useCallback, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import {
	setItems,
	setQuery,
	setLoading,
	setCurrentPage,
} from './state/reducers/repos';
import SearchForm from './components/SearchForm';
import RepoList from './components/RepoList';
import './App.css';
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
			axios
				.get(`https://api.github.com/search/repositories`, {
					params: {
						q: query,
						per_page: perPage,
						page: currentPage,
					},
				})
				.then((response) => {
					dispatch(setItems(response.data.items));
					dispatch(setLoading(false));
					setTotalPages(Math.ceil(response.data.total_count / perPage));
				})
				.catch((error) => {
					console.log('Error fetching and parsing data', error);
				});
		},
		[currentPage, dispatch]
	);

	const handlePrevPageClick = () => {
		dispatch(setCurrentPage(currentPage - 1))
    console.log(currentPage)
	};

	const handleNextPageClick = () => {
		dispatch(setCurrentPage(currentPage + 1))
	};

	useEffect(() => {
    console.log(currentPage)
		performSearch(query);
	}, [currentPage, performSearch, query]);

	return (
		<>
      <SearchForm onSearch={performSearch} />
			<div className="main-content">
				{loading ? (
					<p>Loading...</p>
				) : (
					<div>
						<h2>{query}</h2>
						<RepoList data={repos} />
						{totalPages > 1 && (
							<div className="pagination">
								<button onClick={handlePrevPageClick}>Previous</button>
								<span className="page-number">
									Page {currentPage} of {totalPages}
								</span>
								<button onClick={handleNextPageClick}>Next</button>
							</div>
						)}
					</div>
				)}
			</div>
		</>
	);
};

export default App;
