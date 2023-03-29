import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchForm from './SearchForm';

function RepositoryList() {
	const [repositories, setRepositories] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [totalPages, setTotalPages] = useState(1);
	const fetchRepositories = async (query = 'react') => {
		const perPage = 20;
		const response = await axios.get(
			`https://api.github.com/search/repositories?q=${query}`,
			{
				headers: {
					Authorization: `token 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`,
				},
				params: {
					per_page: perPage,
					page: currentPage,
				},
			}
		);
		setRepositories(response.data.items);
		console.log(response.data.total_count);
		setTotalPages(response.data.total_count / 20);
	}
	useEffect(() => {
	  fetchRepositories();
	}, []);

	const nextPage = () => {
		setCurrentPage(currentPage + 1);
	};

	const prevPage = () => {
		setCurrentPage(currentPage - 1);
	};

	return (
		<div>
			<SearchForm onSearch={fetchRepositories} />
			<h1>Repositories</h1>
			<ul>
				{repositories.map((repository) => (
					<li key={repository.id}>
						<a href={repository.html_url}>{repository.name}</a>
					</li>
				))}
			</ul>
			<div>
				<button onClick={prevPage} disabled={currentPage === 1}>
					Prev
				</button>
				<span>{currentPage}</span>
				<button onClick={nextPage} disabled={currentPage === totalPages}>
					Next
				</button>
			</div>
		</div>
	);
}
export default RepositoryList;
