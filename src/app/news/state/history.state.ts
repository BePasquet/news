import { PayloadAction, createSelector, createSlice } from '@reduxjs/toolkit';
import { BaseState } from 'src/app/core/interfaces/base-state.interface';
import { Article } from '../data/interfaces/article.interface';

export interface HistoryArticle extends Article {
  visitedAt: string;
}

export interface HistoryState extends BaseState {
  data: HistoryArticle[];
}

export const historyInitialState: HistoryState = {
  data: [],
  loading: false,
  loaded: false,
  error: '',
};

export const historySlice = createSlice({
  initialState: historyInitialState,
  name: 'history',
  reducers: {
    getHistory(state) {
      state.loading = true;
    },

    getHistorySuccess(state, { payload }: PayloadAction<HistoryArticle[]>) {
      state.loading = false;
      state.loaded = true;
      state.data = payload;
    },

    getHistoryFail(state, { payload }: PayloadAction<string>) {
      state.loading = false;
      state.loaded = true;
      state.error = payload;
    },

    addToHistory(state, { payload }: PayloadAction<HistoryArticle>) {
      state.data.push(payload);
    },
  },
});

export const {
  actions: { getHistory, getHistorySuccess, getHistoryFail, addToHistory },
  reducer: historyReducer,
  name: HISTORY_STATE_KEY,
} = historySlice;

export interface PartialHistoryState {
  [HISTORY_STATE_KEY]: HistoryState;
}

export const selectHistoryState = (state: PartialHistoryState) =>
  state[HISTORY_STATE_KEY];

export const selectHistory = createSelector(
  selectHistoryState,
  ({ data }) => data
);

export const selectOrderedHistory = createSelector(selectHistory, (history) =>
  [...history].sort(
    (a, z) => Date.parse(z.publishedAt) - Date.parse(a.publishedAt)
  )
);

export const selectHistoryLoading = createSelector(
  selectHistoryState,
  ({ loading }) => loading
);

export const selectHistoryLoaded = createSelector(
  selectHistoryState,
  ({ loaded }) => loaded
);

export const selectHistoryError = createSelector(
  selectHistoryState,
  ({ error }) => error
);
