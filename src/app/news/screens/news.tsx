import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'src/app/core/redux/redux-hooks';
import { getNewsThunk, selectNews } from '../state/news.state';

export function News() {
  const dispatch = useDispatch();
  const news = useSelector(selectNews);

  useEffect(() => {
    dispatch(getNewsThunk(''));
  }, [dispatch]);

  return <div>News {JSON.stringify(news)}</div>;
}

export default News;
