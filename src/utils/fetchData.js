import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchData = async (query, perPage, currentPage) => {
	try {
		const response = await axios.get(
			`https://api.github.com/search/repositories`,
			{
				params: {
					q: query,
					per_page: perPage,
					page: currentPage,
				},
			}
		);
		return response.data;
	} catch (error) {
		console.log('Error fetching and parsing data', error);
	}
};
export const fetchRepoData = createAsyncThunk(
	'fetchRepoData',
	async (query, perPage, currentPage) => {
		const response = await fetchData(query, perPage, currentPage);
		return response;
	}
);
