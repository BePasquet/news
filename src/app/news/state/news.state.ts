import { createAction, createReducer, createSelector } from '@reduxjs/toolkit';
import { BaseState } from 'src/app/core/interfaces/base-state.interface';
import { parseAxiosError } from 'src/app/core/parsers/parse-axios-error';
import { AppThunk } from 'src/app/core/redux/interfaces/app-thunk.interface';
import { Article } from '../data/interfaces/article.interface';
import * as newsService from '../services/news.service';
import { HeadlinesFilter } from '../services/news.service';

export const NEWS_STATE_KEY = 'news';

export type NewsState = BaseState & { data: Article[] };

export interface PartialNewsState {
  [NEWS_STATE_KEY]: NewsState;
}

export const getNews = createAction('[News] Get News');

export const getNewsSuccess = createAction<Article[]>(
  '[News] Get News Success'
);

export const getNewsFail = createAction<string>('[News] Get News Fail');

export const updateArticle = createAction<{
  id: string;
  article: Article;
}>('[News] Update Article');

export const getNewsCancelled = createAction('[News] Get News Cancelled');

export type NewsActions = ReturnType<
  | typeof getNews
  | typeof getNewsSuccess
  | typeof getNewsFail
  | typeof updateArticle
  | typeof getNewsCancelled
>;

export const newsInitialState: NewsState = {
  data: [],
  loading: false,
  loaded: false,
  error: '',
};

export const newsReducer = createReducer(newsInitialState, (builder) =>
  builder
    .addCase(getNews, (state) => {
      state.loading = true;
    })
    .addCase(getNewsSuccess, (state, { payload }) => {
      state.loading = false;
      state.loaded = true;
      state.error = '';
      state.data = payload;
    })
    .addCase(getNewsFail, (state, { payload }) => {
      state.loading = false;
      state.loaded = true;
      state.error = payload;
    })
    .addCase(updateArticle, (state, { payload }) => {
      state.data = state.data.map((article) =>
        article.title === payload.id ? payload.article : article
      );
    })
    .addCase(getNewsCancelled, (state) => {
      state.loading = false;
    })
);

export const selectNewsState = (state: PartialNewsState) =>
  state[NEWS_STATE_KEY];

export const selectNews = createSelector(selectNewsState, ({ data }) => data);

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

export type GetNewsThunk = (
  params?: HeadlinesFilter
) => AppThunk<PartialNewsState, NewsActions>;

export function createNewsThunk(): GetNewsThunk {
  let isProcessing = false;
  let abortController = new AbortController();

  return (params: HeadlinesFilter = {}) => {
    return async (dispatch) => {
      try {
        if (isProcessing) {
          abortController.abort();
          abortController = new AbortController();
        }

        dispatch(getNews());
        isProcessing = true;
        const { articles } = await newsService.getTopHeadlines(
          params,
          abortController.signal
        );

        dispatch(getNewsSuccess(articles));
      } catch (e) {
        const action =
          (e as { code: string }).code === 'ERR_CANCELED'
            ? getNewsCancelled()
            : getNewsFail(parseAxiosError(e));
        dispatch(action);
      } finally {
        isProcessing = false;
      }
    };
  };
}

export const getNewsThunk = createNewsThunk();

export function getNewsForceErrorThunk(): AppThunk<
  PartialNewsState,
  NewsActions
> {
  return async (dispatch) => {
    try {
      dispatch(getNews());
      const { data } = await newsService.getSourcesWrong();
      dispatch(getNewsSuccess(data as Article[]));
    } catch (e) {
      dispatch(getNewsFail(parseAxiosError(e)));
    }
  };
}
