import { News } from './../model/news.model';

export interface newState {
  news: News[],
  numberOfNews: number,
  error:string,
  loading: boolean,
  isSuccess: boolean,
  id: number,
  title: string,
  description: string,
  cover_image: string
}
