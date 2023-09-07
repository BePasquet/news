import { useEffect } from 'react';
import { useDispatch } from 'src/app/core/redux/redux-hooks';

import { useSelector } from 'react-redux';
import {
  getNewsThunk,
  selectNewsLoaded,
  selectNewsLoading,
} from '../state/news.state';

/**
 * Attempts to fetch news only when haven't been fetched before
 */
export function useFetchNews(): void {
  const dispatch = useDispatch();
  const loading = useSelector(selectNewsLoading);
  const loaded = useSelector(selectNewsLoaded);

  useEffect(() => {
    if (!loading && !loaded) {
      dispatch(getNewsThunk());
    }
  }, [dispatch, loading, loaded]);
}
