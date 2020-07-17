export interface IArticle {
  id: number;
  title: string;
  date: any;
  author: string;
  overview: string;
  content: string;
  comments: IComment[];
}

export interface IComment {
  id: number;
  date: any;
  user: IUser;
  comment: string;
}

export interface IUser {
  id: number;
  name: string;
  location: string;
}
