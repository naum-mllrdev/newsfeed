import { IComment } from './IComment';

export interface IArticle {
  id: number;
  title: string;
  date: any;
  author: string;
  overview: string;
  content: string;
  comments: IComment[];
}
