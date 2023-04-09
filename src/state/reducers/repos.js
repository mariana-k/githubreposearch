import { createSlice } from '@reduxjs/toolkit';
import { fetchRepoData } from '../../utils/fetchData';

const reposSlice = createSlice({
	name: 'repos',
	initialState: {
		items: [],
		query: 'react',
		loading: true,
		currentPage: 1,
		repoData: [],
	},
	reducers: {
		setItems: (state, action) => {
			state.items = action.payload;
		},
		setQuery: (state, action) => {
			state.query = action.payload;
		},
		setLoading: (state, action) => {
			state.loading = action.payload;
		},
		setCurrentPage: (state, action) => {
			state.currentPage = action.payload;
		},
	},
	extraReducers: (builder) => {
		// Add reducers for additional action types here, and handle loading state as needed
		builder.addCase(fetchRepoData.fulfilled, (state, action) => {
			// Add user to the state array
			state.repoData.push(action.payload);
		});
	},
});

export const { setItems, setQuery, setLoading, setCurrentPage } =
	reposSlice.actions;

export default reposSlice.reducer;
