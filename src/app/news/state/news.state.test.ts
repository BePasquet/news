import { ThunkDispatch } from '@reduxjs/toolkit';
import { articlesMock } from 'src/app/core/mocks/mock';
import { DEFAULT_ERROR_MESSAGE } from 'src/app/core/parsers/parse-axios-error';
import * as newsService from '../services/news.service';
import {
  NEWS_STATE_KEY,
  NewsActions,
  PartialNewsState,
  getNews,
  getNewsCancelled,
  getNewsFail,
  getNewsSuccess,
  getNewsThunk,
  newsInitialState,
  newsReducer,
  updateArticle,
} from './news.state';

function mockGetState() {
  return { [NEWS_STATE_KEY]: newsInitialState };
}

describe('News State', () => {
  describe('newsReducer', () => {
    it('Should return state with loading true when is applied with getNews', () => {
      const state = newsReducer(newsInitialState, getNews());
      expect(state).toEqual({ ...newsInitialState, loading: true });
    });

    it('Should return state with loading false, loaded true, error as an empty string and data populated with payload (non empty array) when is applied with getNewsSuccess', () => {
      const actions = [getNews(), getNewsSuccess(articlesMock)];
      const state = actions.reduce(newsReducer, newsInitialState);

      expect(state).toEqual({
        error: '',
        loaded: true,
        loading: false,
        data: articlesMock,
      });
    });

    it('Should return state with loading false, loaded true, error as an empty string and data populated with payload (empty array) when is applied with getNewsSuccess', () => {
      const actions = [getNews(), getNewsSuccess([])];
      const state = actions.reduce(newsReducer, newsInitialState);

      expect(state).toEqual({
        error: '',
        loaded: true,
        loading: false,
        data: [],
      });
    });

    it('Should return state with loading false, loaded true, error populated with payload when is applied with getNewsFail', () => {
      const actions = [getNews(), getNewsFail(DEFAULT_ERROR_MESSAGE)];
      const state = actions.reduce(newsReducer, newsInitialState);

      expect(state).toEqual({
        error: DEFAULT_ERROR_MESSAGE,
        loaded: true,
        loading: false,
        data: [],
      });
    });

    it('Should return state with loading false when is applied with getNewsCancelled', () => {
      const actions = [getNews(), getNewsCancelled()];
      const state = actions.reduce(newsReducer, newsInitialState);

      expect(state).toEqual({ ...newsInitialState, loading: false });
    });

    it('Should return state with data with the updated article in payload when is applied with updateArticle', () => {
      const [firstArticle] = articlesMock;
      const newArticle = { ...firstArticle, title: 'Updated Title' };

      const payload = {
        id: firstArticle.title,
        article: newArticle,
      };

      const actions = [
        getNews(),
        getNewsSuccess(articlesMock),
        updateArticle(payload),
      ];

      const state = actions.reduce(newsReducer, newsInitialState);

      const expectedArticles = articlesMock.map((article) =>
        article.title === payload.id ? newArticle : article
      );

      expect(state).toEqual({
        error: '',
        loaded: true,
        loading: false,
        data: expectedArticles,
      });
    });
  });

  describe('getNewsThunk', () => {
    it('Should dispatch getNews -> getNewsSuccess when http request success', async () => {
      const dispatch = jest.fn();
      jest.spyOn(newsService, 'getTopHeadlines').mockResolvedValue({
        status: 'ok',
        totalResults: articlesMock.length,
        articles: articlesMock,
      });

      await getNewsThunk()(
        dispatch as ThunkDispatch<PartialNewsState, unknown, NewsActions>,
        mockGetState,
        null
      );

      expect(dispatch).toHaveBeenNthCalledWith(1, getNews());
      expect(dispatch).toHaveBeenNthCalledWith(2, getNewsSuccess(articlesMock));
    });

    it('Should dispatch getNews -> getNewsFail when http request fails', async () => {
      const dispatch = jest.fn();

      const error = 'CONNECTION_ERROR';

      jest.spyOn(newsService, 'getTopHeadlines').mockRejectedValue({
        response: { data: { message: error } },
      });

      await getNewsThunk()(
        dispatch as ThunkDispatch<PartialNewsState, unknown, NewsActions>,
        mockGetState,
        null
      );

      expect(dispatch).toHaveBeenNthCalledWith(1, getNews());
      expect(dispatch).toHaveBeenNthCalledWith(2, getNewsFail(error));
    });

    it('Should dispatch getNews -> getNews -> getNewsCancelled -> getNewsSuccess when http request is cancelled and then success (cancelation)', async () => {
      const dispatch = jest.fn();
      jest.spyOn(newsService, 'getTopHeadlines').mockRejectedValue({
        code: 'ERR_CANCELED',
      });

      getNewsThunk()(
        dispatch as ThunkDispatch<PartialNewsState, unknown, NewsActions>,
        mockGetState,
        null
      );

      jest.spyOn(newsService, 'getTopHeadlines').mockResolvedValue({
        status: 'ok',
        totalResults: articlesMock.length,
        articles: articlesMock,
      });

      await getNewsThunk()(
        dispatch as ThunkDispatch<PartialNewsState, unknown, NewsActions>,
        mockGetState,
        null
      );

      console.log(dispatch.mock.calls);
      expect(dispatch).toHaveBeenNthCalledWith(1, getNews());
      expect(dispatch).toHaveBeenNthCalledWith(2, getNews());
      expect(dispatch).toHaveBeenNthCalledWith(3, getNewsCancelled());
      expect(dispatch).toHaveBeenNthCalledWith(4, getNewsSuccess(articlesMock));
    });

    it('Should dispatch getNews -> getNews -> getNewsCancelled -> getNewsFail when http request is cancelled and then fail (cancelation)', async () => {
      const dispatch = jest.fn();
      jest.spyOn(newsService, 'getTopHeadlines').mockRejectedValue({
        code: 'ERR_CANCELED',
      });

      getNewsThunk()(
        dispatch as ThunkDispatch<PartialNewsState, unknown, NewsActions>,
        mockGetState,
        null
      );

      const error = 'CONNECTION_ERROR';

      jest.spyOn(newsService, 'getTopHeadlines').mockRejectedValue({
        response: { data: { message: error } },
      });

      await getNewsThunk()(
        dispatch as ThunkDispatch<PartialNewsState, unknown, NewsActions>,
        mockGetState,
        null
      );

      expect(dispatch).toHaveBeenNthCalledWith(1, getNews());
      expect(dispatch).toHaveBeenNthCalledWith(2, getNews());
      expect(dispatch).toHaveBeenNthCalledWith(3, getNewsCancelled());
      expect(dispatch).toHaveBeenNthCalledWith(4, getNewsFail(error));
    });
  });
});
