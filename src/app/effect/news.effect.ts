import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Actions,createEffect, ofType } from "@ngrx/effects";
import { catchError, of, switchMap } from "rxjs";
import { map } from "rxjs";
import * as newActions from "../action/new.action"
import { News } from '../model/news.model';

@Injectable()
export class webEffect{
  constructor(private action$: Actions, private httpClient:HttpClient){}
  getNews = createEffect(()=> this.action$.pipe(
    ofType(newActions.getPaginate),
    switchMap((action) => {
      return this.httpClient.get(`https://social.runwayclub.dev/api/articles/latest?page=${action.page}&per_page=${action.per_page}`)
    }),

    map((response)=>{
      console.log(response)
      return newActions.getNewSuccess({news: <Array<News>>response})
    }),

    catchError((error)=> of(newActions.getNewFail({error:error})))
  ))
}
