import { newsApi } from 'src/app/core/apis/news-api';
import { TopHeadlinesResponse } from '../data/interfaces/top-headlines-response';

export async function getTopHeadlines(
  query: string
): Promise<TopHeadlinesResponse> {
  const queryParams = new URLSearchParams();

  queryParams.append('country', 'us');

  if (query) {
    queryParams.append('query', query);
  }

  const { data } = await newsApi.get<TopHeadlinesResponse>(
    `/top-headlines?${queryParams.toString()}`
  );

  return data;
}
