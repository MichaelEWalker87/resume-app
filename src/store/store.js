import { configureStore } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

const blogSlice = createSlice({
  name: 'blog',
  initialState: {
    currentBlog: null,
  },
  reducers: {
    setCurrentBlog: (state, action) => {
      state.currentBlog = action.payload;
    },
  },
});

export const { setCurrentBlog } = blogSlice.actions;

const store = configureStore({
  reducer: {
    blog: blogSlice.reducer,
  },
});

export default store;