import axios from 'axios';

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
