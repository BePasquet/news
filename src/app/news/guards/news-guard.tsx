import { PropsWithChildren } from 'react';
import { useSelector } from 'react-redux';
import { Results } from 'src/app/shared/components/results';
import { useFetchNews } from '../hooks/use-fetch-news';
import {
  selectNewsError,
  selectNewsLoaded,
  selectNewsLoading,
} from '../state/news.state';

export function NewsGuard({ children }: PropsWithChildren) {
  const loaded = useSelector(selectNewsLoaded);
  const loading = useSelector(selectNewsLoading);
  const error = useSelector(selectNewsError);

  useFetchNews();

  return (
    <Results loading={loading || !loaded} error={error} data={loaded}>
      {loaded && children}
    </Results>
  );
}
