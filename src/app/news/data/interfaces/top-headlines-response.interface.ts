import { Article } from './article.interface';

export interface TopHeadlinesResponse {
  status: string;
  totalResults: number;
  articles: Article[];
}
