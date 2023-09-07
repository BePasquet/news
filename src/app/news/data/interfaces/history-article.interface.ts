import { Article } from './article.interface';

export interface HistoryArticle extends Article {
  visitedAt: string;
}
