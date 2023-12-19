import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentBlog: null,
};

const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    setCurrentBlog: (state, action) => {
      state.currentBlog = action.payload;
    },
  },
});

export const reducer = blogSlice.reducer;
