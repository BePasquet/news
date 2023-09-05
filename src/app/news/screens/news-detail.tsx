import { useParams } from 'react-router-dom';

export function NewsDetail() {
  const { id } = useParams();

  return <div>New {id}</div>;
}

export default NewsDetail;
