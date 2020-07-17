import { IUser } from './IUser';

export interface IComment {
  id: number;
  date: any;
  user: IUser;
  comment: string;
}
