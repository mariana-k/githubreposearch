import React, { useEffect, useCallback } from 'react';
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

	const performSearch = useCallback(
		(query) => {
			const perPage = 20;
			dispatch(setQuery(query));
			dispatch(setLoading(true));
			axios
				.get(`https://api.github.com/search/repositories?q=${query}`, {
					params: {
						per_page: perPage,
						page: currentPage,
					},
				})
				.then((response) => {
					dispatch(setItems(response.data.items));
					dispatch(setLoading(false));
				})
				.catch((error) => {
					console.log('Error fetching and parsing data', error);
				});
		},
		[currentPage, dispatch]
	);

	useEffect(() => {
		performSearch(query);
	}, [currentPage, performSearch, query]);

	return (
		<>
			<div className="main-header">
				<div className="inner">
					<h1 className="main-title">RepoSearch</h1>
					<SearchForm onSearch={performSearch} />
				</div>
			</div>
			<div className="main-content">
				{loading ? (
					<p>Loading...</p>
				) : (
					<div>
						<h2>{query}</h2>
						<RepoList data={repos} />
						<button onClick={() => dispatch(setCurrentPage(currentPage + 1))}>
							Load more
						</button>
					</div>
				)}
			</div>
		</>
	);
};

export default App;
