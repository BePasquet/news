import { configureStore } from '@reduxjs/toolkit';
import { NEWS_STATE_KEY, newsReducer } from '../../news/state/news.state';

export const store = configureStore({
  reducer: {
    [NEWS_STATE_KEY]: newsReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});
