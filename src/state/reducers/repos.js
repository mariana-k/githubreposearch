import { createSlice } from '@reduxjs/toolkit';

const reposSlice = createSlice({
  name: 'repos',
  initialState: {
    items: [],
    query: 'react',
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
  },
});

export const {
  setItems,
  setQuery,
  setLoading,
  setCurrentPage,
} = reposSlice.actions;

export default reposSlice.reducer;
