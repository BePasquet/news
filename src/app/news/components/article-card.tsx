import { ArrowOutward } from '@mui/icons-material';
import { Card, Typography } from '@mui/material';
import styled from 'styled-components';
import { Article } from '../data/interfaces/article.interface';

export interface ArticleCardProps {
  article: Article;
  onClick?: (article: Article) => void;
}

export function ArticleCard({ article, onClick }: ArticleCardProps) {
  const publishedAt = new Date(article.publishedAt).toLocaleDateString('en');
  const title =
    article.title.length > 100
      ? article.title.slice(0, 100).concat('...')
      : article.title;

  return (
    <CardContainer style={{ backgroundImage: `url('${article.urlToImage}')` }}>
      <OverLayContainer>
        <ButtonContainer>
          <NavigateButton
            onClick={() => {
              if (onClick) {
                onClick(article);
              }
            }}
          >
            <ArrowOutward fontSize="medium" />
          </NavigateButton>
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
  justify-content: flex-end;
`;

const NavigateButton = styled.button`
  border: none;
  background-color: transparent;
  padding: 0;
  color: #ccc;
  cursor: pointer;
`;
