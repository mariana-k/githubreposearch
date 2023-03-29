import { createSlice } from '@reduxjs/toolkit';

const reposSlice = createSlice({
  name: 'repos',
  initialState: {
    items: [],
    query: 'web',
    loading: true,
    currentPage: 1,
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
    setTotalCount: (state, action) => {
      state.totalCount = action.payload;
    },
  },
});

export const {
  setItems,
  setQuery,
  setLoading,
  setCurrentPage,
  setTotalCount,
} = reposSlice.actions;

export default reposSlice.reducer;
