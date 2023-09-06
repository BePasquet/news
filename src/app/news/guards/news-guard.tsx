import { PropsWithChildren, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'src/app/core/redux/redux-hooks';
import { Results } from 'src/app/shared/components/results';
import {
  getNewsThunk,
  selectNewsError,
  selectNewsLoaded,
  selectNewsLoading,
} from '../state/news.state';

export function NewsGuard({ children }: PropsWithChildren) {
  const dispatch = useDispatch();
  const loaded = useSelector(selectNewsLoaded);
  const loading = useSelector(selectNewsLoading);
  const error = useSelector(selectNewsError);

  useEffect(() => {
    if (!loading && !loaded) {
      dispatch(getNewsThunk());
    }
  }, [loaded, loading, dispatch]);

  return (
    <Results loading={loading} error={error} data={loaded}>
      {loaded && children}
    </Results>
  );
}
