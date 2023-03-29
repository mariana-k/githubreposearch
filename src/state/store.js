import { configureStore } from '@reduxjs/toolkit';
import reposReducer from './reducers/repos';

const store = configureStore({
  reducer: {
    repos: reposReducer,
  },
});

export default store;