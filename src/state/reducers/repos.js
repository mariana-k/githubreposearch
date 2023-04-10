import { createSlice } from '@reduxjs/toolkit';
import { fetchRepoData } from '../../utils/fetchData';

const reposSlice = createSlice({
	name: 'repos',
	initialState: {
		query: 'react',
		currentPage: 1,
		repoData: [],
	},
	reducers: {
		setQuery: (state, action) => {
			state.query = action.payload;
		},
		setCurrentPage: (state, action) => {
			state.currentPage = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchRepoData.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchRepoData.fulfilled, (state, action) => {
				const perPage = 20;
				state.loading = false;
				state.repoData.push(action.payload);
				state.totalPages = Math.ceil(action.payload?.total_count / perPage);
			})
			.addCase(fetchRepoData.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message;
			});
	},
});

export const { setItems, setQuery, setLoading, setCurrentPage } =
	reposSlice.actions;

export default reposSlice.reducer;
