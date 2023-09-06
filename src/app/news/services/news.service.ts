import axios from 'axios';
import { SourcesResponse } from '../data/interfaces/sources-response.interface';
import { TopHeadlinesResponse } from '../data/interfaces/top-headlines-response.interface';

export const newsApi = axios.create({
  baseURL: 'https://newsapi.org/v2',
});

newsApi.interceptors.request.use((request) => ({
  ...request,
  params: {
    ...request.params,
    apiKey: '099148be22804e849a0c6fe022b7cf5e',
  },
}));

export interface HeadlinesFilter {
  query?: string;
  sources?: string;
  country?: string;
}

export async function getTopHeadlines(
  { query = '', sources = '', country = 'us' }: HeadlinesFilter,
  signal?: AbortSignal
): Promise<TopHeadlinesResponse> {
  const queryParams = new URLSearchParams();

  if (query) {
    queryParams.append('q', query);
  }

  // API requires sources or country
  if (sources) {
    queryParams.append('sources', 'abc-news');
  } else {
    queryParams.append('country', country);
  }

  const { data } = await newsApi.get<TopHeadlinesResponse>(
    `/top-headlines?${queryParams.toString()}`,
    {
      signal: signal,
    }
  );

  return data;
}

export async function getSources(): Promise<SourcesResponse> {
  const { data } = await newsApi.get<SourcesResponse>(`/sources`);

  return data;
}
