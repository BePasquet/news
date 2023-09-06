import { useSelector } from 'react-redux';

import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'src/app/core/redux/redux-hooks';
import { Results } from 'src/app/shared/components/results';
import { WarningMessage } from 'src/app/shared/components/warning-message';
import styled from 'styled-components';
import { Article } from '../data/interfaces/article.interface';
import {
  selectExistingNews,
  selectNewsError,
  selectNewsLoaded,
  selectNewsLoading,
  updateArticle,
} from '../state/news.state';
import { ArticleCard } from './article-card';
import { ArticleForm } from './article-form';

export function ArticlesList() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const news = useSelector(selectExistingNews);
  const loading = useSelector(selectNewsLoading);
  const loaded = useSelector(selectNewsLoaded);
  const error = useSelector(selectNewsError);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const handleNavigateClick = useCallback(
    (article: Article) => navigate(`/news/${article.title}`),
    [navigate]
  );

  const handleEditClick = useCallback((article: Article) => {
    setSelectedArticle(article);
    setIsDialogOpen(true);
  }, []);

  const closeDialog = useCallback(() => setIsDialogOpen(false), []);

  const handleArticleUpdate = (title: string) => {
    closeDialog();

    if (!selectedArticle) {
      return;
    }

    dispatch(
      updateArticle({
        id: selectedArticle.title,
        article: { ...selectedArticle, title },
      })
    );
  };

  const renderItem = (article: Article, i: number) => (
    <ArticleCardContainer key={article.url}>
      <ArticleCard
        article={article}
        onNavigateClick={handleNavigateClick}
        onEditClick={handleEditClick}
      />
    </ArticleCardContainer>
  );

  return (
    <>
      <Dialog
        maxWidth="xs"
        fullWidth={true}
        open={isDialogOpen}
        onClose={closeDialog}
      >
        <DialogTitle>Update article title</DialogTitle>
        <DialogContent>
          <ArticleForm
            initialValue={selectedArticle}
            onSubmit={handleArticleUpdate}
            onCancel={closeDialog}
          />
        </DialogContent>
      </Dialog>

      <Results loading={loading || !loaded} error={error} data={news}>
        {loaded && news.length ? (
          <ArticlesContainer>{news.map(renderItem)}</ArticlesContainer>
        ) : (
          <WarningMessage message="Sorry there are no results" />
        )}
      </Results>
    </>
  );
}

const ArticlesContainer = styled.div`
  display: flex;
  margin-right: 10px;
  flex-direction: row;
  flex-wrap: wrap;
`;

const ArticleCardContainer = styled.div`
  width: calc((100% - 40px) / 4);
  margin-bottom: 10px;
  margin-left: 10px;

  @media screen and (max-width: 900px) {
    width: calc((100% - 30px) / 3);
  }

  @media screen and (max-width: 768px) {
    width: calc((100% - 20px) / 2);
  }

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;
