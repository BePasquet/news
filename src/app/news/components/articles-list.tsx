import { useSelector } from 'react-redux';

import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Results } from 'src/app/shared/components/results';
import { WarningMessage } from 'src/app/shared/components/warning-message';
import styled from 'styled-components';
import { Article } from '../data/interfaces/article.interface';
import {
  selectExistingNews,
  selectNewsError,
  selectNewsLoaded,
  selectNewsLoading,
} from '../state/news.state';
import { ArticleCard } from './article-card';

export function ArticlesList() {
  const news = useSelector(selectExistingNews);
  const loading = useSelector(selectNewsLoading);
  const loaded = useSelector(selectNewsLoaded);
  const error = useSelector(selectNewsError);
  const navigate = useNavigate();

  const handleCardClick = useCallback(
    (article: Article) => navigate(`/news/${article.title}`),
    [navigate]
  );

  const renderItem = (article: Article, i: number) => (
    <ArticleCardContainer
      key={article.url}
      style={{
        marginRight: (i + 1) % 4 === 0 ? '0px' : '10px',
      }}
    >
      <ArticleCard article={article} onClick={handleCardClick} />
    </ArticleCardContainer>
  );

  return (
    <Results loading={loading} error={error} data={news}>
      {loaded && news.length ? (
        <ArticlesContainer>{news.map(renderItem)}</ArticlesContainer>
      ) : (
        <WarningMessage message="Sorry there are no results" />
      )}
    </Results>
  );
}

const ArticlesContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const ArticleCardContainer = styled.div`
  flex: calc((100% - 30px) / 4);
  margin-bottom: 10px;
`;
