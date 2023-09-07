import {
  EntityState,
  PayloadAction,
  createEntityAdapter,
  createSelector,
  createSlice,
} from '@reduxjs/toolkit';
import { BaseState } from 'src/app/core/interfaces/base-state.interface';
import { parseAxiosError } from 'src/app/core/parsers/parse-axios-error';
import { AppThunk } from 'src/app/core/redux/interfaces/app-thunk.interface';
import { Source } from '../data/interfaces/source.interface';
import * as newsService from '../services/news.service';

export type SourcesState = EntityState<Source> & BaseState;

export const sourcesEntityAdapter = createEntityAdapter<Source>();

export const sourcesInitialState: SourcesState =
  sourcesEntityAdapter.getInitialState({
    loading: false,
    loaded: false,
    error: '',
  });

export const sourcesSlice = createSlice({
  name: 'sources',
  initialState: sourcesInitialState,
  reducers: {
    getSources(state) {
      state.loading = true;
    },
    getSourcesSuccess(state, { payload }: PayloadAction<Source[]>) {
      state.loading = false;
      state.loaded = true;
      state.error = '';
      sourcesEntityAdapter.setAll(state, payload);
    },
    getSourcesFail(state, { payload }: PayloadAction<string>) {
      state.loading = false;
      state.loaded = true;
      state.error = payload;
    },
  },
});

export const {
  actions: { getSources, getSourcesSuccess, getSourcesFail },
  reducer: sourcesReducer,
  name: SOURCES_STATE_KEY,
} = sourcesSlice;

export type SourcesActions = ReturnType<
  typeof getSources | typeof getSourcesSuccess | typeof getSourcesFail
>;

export interface PartialSourcesState {
  [SOURCES_STATE_KEY]: SourcesState;
}

const { selectAll } = sourcesEntityAdapter.getSelectors();

export const selectSourcesState = (state: PartialSourcesState) =>
  state[SOURCES_STATE_KEY];

export const selectSources = createSelector(selectSourcesState, selectAll);

export const selectSourcesLoading = createSelector(
  selectSourcesState,
  ({ loading }) => loading
);

export const selectSourcesLoaded = createSelector(
  selectSourcesState,
  ({ loaded }) => loaded
);

export const selectSourcesError = createSelector(
  selectSourcesState,
  ({ error }) => error
);

export function getSourcesThunk(): AppThunk<
  PartialSourcesState,
  SourcesActions
> {
  return async (dispatch) => {
    try {
      dispatch(getSources());
      const { sources } = await newsService.getSources();
      dispatch(getSourcesSuccess(sources));
    } catch (e) {
      const error = parseAxiosError(e);
      dispatch(getSourcesFail(error));
    }
  };
}
