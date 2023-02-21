import { News } from './../model/news.model';
import { createAction, props } from "@ngrx/store";


export const getPaginate = createAction('[News] Get Paginate', props<{page: number, per_page:number}>());
export const getNewSuccess = createAction('[News] Get News Success', props<{news: News[]}>());
export const getNewFail = createAction('[News] Get News Success', props<{error:string}>());

