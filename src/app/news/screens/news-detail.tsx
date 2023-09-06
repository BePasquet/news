import { Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { FlexColumnContainer } from 'src/app/shared/components/flex-column-container';
import { WarningMessage } from 'src/app/shared/components/warning-message';
import styled from 'styled-components';
import { selectNewsEntities } from '../state/news.state';

export function NewsDetail() {
  const { title } = useParams();
  const entities = useSelector(selectNewsEntities);
  const article = entities[title ?? ''];

  if (!article) {
    return (
      <WarningMessage message="Sorry the article that you requested doesn't exist" />
    );
  }

  const publicationDate = new Date(article.publishedAt).toLocaleDateString(
    'en',
    {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    }
  );

  return (
    <FlexColumnContainer style={{ alignItems: 'center' }}>
      <NewsDetailContainer>
        <Title variant="h1">{article.title}</Title>
        <Description variant="h6">{article.description}</Description>

        <div className="block">
          <AuthorText variant="body2">{article.author}</AuthorText>
          <PublicationText variant="body2">
            Published in {article.source.name} on {publicationDate}
          </PublicationText>
        </div>

        {article.urlToImage && (
          <FlexColumnContainer
            className="block"
            style={{ alignItems: 'center' }}
          >
            <img src={article.urlToImage} alt="article" />
          </FlexColumnContainer>
        )}

        <Typography className="block" variant="body1">
          {article.content}
        </Typography>

        <FlexColumnContainer
          className="block"
          style={{ alignItems: 'flex-end' }}
        >
          <Link target="_blank" href={article.url} rel="noreferrer">
            Go to original
          </Link>
        </FlexColumnContainer>
      </NewsDetailContainer>
    </FlexColumnContainer>
  );
}

const NewsDetailContainer = styled.div`
  padding: 20px;

  .block {
    margin-top: 20px;
  }

  img {
    max-width: 100%;
  }

  @media screen and (min-width: 900px) {
    width: 900px;
    padding: 20px 0;
  }
`;

const Title = styled(Typography)`
  font-size: 32px;
  font-weight: bold;

  @media screen and (max-width: 600px) {
    font-size: 28px;
  }
`;

const Description = styled(Typography)`
  font-size: 18px;
  font-weight: normal;
  color: #6b6b6b;
  margin: 10px 0 0 0;
`;

const AuthorText = styled(Typography)`
  margin: 0;
  color: ##6b6b6b;
  font-weight: bold;
`;

const PublicationText = styled(Typography)`
  margin: 0;
  color: #6b6b6b;
  font-size: 14px;
`;

const Link = styled.a`
  text-decoration: none;
  color: #1976d2;
`;

export default NewsDetail;
