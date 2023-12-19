import { createAction } from '@reduxjs/toolkit';

const UPDATE_CURRENT_BLOG = createAction('UPDATE_CURRENT_BLOG', (currentBlog) => ({
  currentBlog,
}));

export { UPDATE_CURRENT_BLOG };