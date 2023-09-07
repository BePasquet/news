import { PayloadAction, createSelector, createSlice } from '@reduxjs/toolkit';
import { BaseState } from 'src/app/core/interfaces/base-state.interface';
import { AppThunk } from 'src/app/core/redux/interfaces/app-thunk.interface';
import { HistoryArticle } from '../data/interfaces/history-article.interface';
import * as newsService from '../services/news.service';

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
    addToHistoryFail(state, { payload }: PayloadAction<string>) {
      state.error = payload;
    },
  },
});

export const {
  actions: {
    getHistory,
    getHistorySuccess,
    getHistoryFail,
    addToHistory,
    addToHistoryFail,
  },
  reducer: historyReducer,
  name: HISTORY_STATE_KEY,
} = historySlice;

export type HistoryActions = ReturnType<
  | typeof getHistory
  | typeof getHistorySuccess
  | typeof getHistoryFail
  | typeof addToHistory
  | typeof addToHistoryFail
>;

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
  [...history].sort((a, z) => Date.parse(z.visitedAt) - Date.parse(a.visitedAt))
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

export function getHistoryThunk(): AppThunk<
  PartialHistoryState,
  HistoryActions
> {
  return (dispatch) => {
    try {
      dispatch(getHistory());
      const history = newsService.getHistory();
      dispatch(getHistorySuccess(history));
    } catch {
      const error = 'Sorry there was an error loading the history';
      dispatch(getHistoryFail(error));
    }
  };
}

export function saveToHistoryThunk(
  article: HistoryArticle
): AppThunk<PartialHistoryState, HistoryActions> {
  return (dispatch, getState) => {
    try {
      dispatch(addToHistory(article));
      const history = selectHistory(getState());
      newsService.saveHistory(history);
    } catch {
      const error = 'Sorry there was an error saving your history';
      dispatch(addToHistoryFail(error));
    }
  };
}
