import {
  EntityState,
  createAction,
  createEntityAdapter,
  createReducer,
  createSelector,
} from '@reduxjs/toolkit';
import { BaseState } from 'src/app/core/interfaces/base-state.interface';
import { parseAxiosError } from 'src/app/core/parsers/parse-axios-error';
import { AppThunk } from 'src/app/core/redux/interfaces/app-thunk.interface';
import { Article } from '../data/interfaces/article.interface';
import * as newsService from '../services/news.service';
import { HeadlinesFilter } from '../services/news.service';

export const NEWS_STATE_KEY = 'news';

export type NewsState = EntityState<Article> & BaseState;

export interface PartialNewsState {
  [NEWS_STATE_KEY]: NewsState;
}

export const getNews = createAction<HeadlinesFilter>('[News] Get News');

export const getNewsSuccess = createAction<Article[]>(
  '[News] Get News Success'
);

export const getNewsFail = createAction<string>('[News] Get News Fail');

export type NewsActions = ReturnType<
  typeof getNews | typeof getNewsSuccess | typeof getNewsFail
>;

export const newsEntityAdapter = createEntityAdapter<Article>({
  selectId: ({ title }) => title,
});

export const newsInitialState: NewsState = newsEntityAdapter.getInitialState({
  loading: false,
  loaded: false,
  error: '',
});

export const newsReducer = createReducer(newsInitialState, (builder) =>
  builder
    .addCase(getNews, (state) => {
      state.loading = true;
    })
    .addCase(getNewsSuccess, (state, { payload }) => {
      state.loading = false;
      state.loaded = true;
      state.error = '';
      newsEntityAdapter.setAll(state, payload);
    })
    .addCase(getNewsFail, (state, { payload }) => {
      state.loading = false;
      state.loaded = true;
      state.error = payload;
    })
);

const { selectAll, selectEntities } = newsEntityAdapter.getSelectors();

export const selectNewsState = (state: PartialNewsState) =>
  state[NEWS_STATE_KEY];

export const selectNews = createSelector(selectNewsState, selectAll);

export const selectNewsEntities = createSelector(
  selectNewsState,
  selectEntities
);

// API brings news that has been removed without content
export const selectExistingNews = createSelector(selectNews, (news) =>
  news.filter(({ title }) => title !== '[Removed]')
);

export const selectNewsLoading = createSelector(
  selectNewsState,
  ({ loading }) => loading
);

export const selectNewsLoaded = createSelector(
  selectNewsState,
  ({ loaded }) => loaded
);

export const selectNewsError = createSelector(
  selectNewsState,
  ({ error }) => error
);

export function getNewsThunk(
  params: HeadlinesFilter = {}
): AppThunk<PartialNewsState, NewsActions> {
  return async (dispatch) => {
    try {
      dispatch(getNews(params));
      const { articles } = await newsService.getTopHeadlines(params);
      dispatch(getNewsSuccess(articles));
    } catch (e) {
      const error = parseAxiosError(e);
      dispatch(getNewsFail(error));
    }
  };
}
