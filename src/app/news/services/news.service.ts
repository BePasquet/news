import axios from 'axios';
import { environment } from 'src/environments/environment';
import { SourcesResponse } from '../data/interfaces/sources-response.interface';
import { TopHeadlinesResponse } from '../data/interfaces/top-headlines-response.interface';

export const newsApi = axios.create({
  baseURL: environment.NEWS_API_URI,
});

newsApi.interceptors.request.use((request) => ({
  ...request,
  params: {
    ...request.params,
    apiKey: environment.NEWS_API_PUBLIC_KEY,
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
