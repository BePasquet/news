import { Card, Typography } from '@mui/material';
import styled from 'styled-components';
import { Article } from '../data/interfaces/article.interface';
import { ArticleCardToolbar } from './article-card-toolbar';

export interface ArticleCardProps {
  article: Article;
  onNavigateClick: (article: Article) => void;
  onEditClick: (article: Article) => void;
}

export function ArticleCard({
  article,
  onNavigateClick,
  onEditClick,
}: ArticleCardProps) {
  const publishedAt = new Date(article.publishedAt).toLocaleDateString('en');

  const title =
    article.title.length > 100
      ? article.title.slice(0, 97).concat('...')
      : article.title;

  const backgroundStyle = article.urlToImage
    ? { backgroundImage: `url('${article.urlToImage}')` }
    : {};

  const handleNavigation = () => onNavigateClick(article);

  const handleEdit = () => onEditClick(article);

  return (
    <CardContainer style={backgroundStyle}>
      <OverLayContainer>
        <ButtonContainer>
          <ArticleCardToolbar
            onNavigateClick={handleNavigation}
            onEditClick={handleEdit}
          />
        </ButtonContainer>

        <div>
          <Typography variant="caption" color="#ccc">
            {publishedAt}
          </Typography>

          <Typography
            variant="h6"
            color="#fff"
            sx={{ margin: 0, fontSize: 14 }}
          >
            {title}
          </Typography>
        </div>
      </OverLayContainer>
    </CardContainer>
  );
}

const CardContainer = styled(Card)`
  display: flex;
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 8px;
  height: 150px;
`;

const OverLayContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.6);
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
