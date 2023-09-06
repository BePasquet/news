import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { WarningMessage } from 'src/app/shared/components/warning-message';
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

  return <div>{article.title}</div>;
}

export default NewsDetail;
