import { configureStore } from '@reduxjs/toolkit';
import {
  SOURCES_STATE_KEY,
  sourcesReducer,
} from 'src/app/news/state/sources.state';
import { NEWS_STATE_KEY, newsReducer } from '../../news/state/news.state';

export const store = configureStore({
  reducer: {
    [NEWS_STATE_KEY]: newsReducer,
    [SOURCES_STATE_KEY]: sourcesReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});
