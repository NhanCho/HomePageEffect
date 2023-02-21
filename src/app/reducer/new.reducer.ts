import { createReducer, on } from '@ngrx/store';
import { newState } from './../state/news.state';
import * as newActions from "../action/new.action"


const initialState: newState = {
  news: [],
  numberOfNews: 0,
  error:'',
  loading: false,
  isSuccess: true,
  id: 0,
  title: '',
  description: '',
  cover_image: ''
}

export const newsReducer = createReducer(
  initialState,
  on(newActions.getPaginate, (state,action)=> {
    console.log(action.type)
    return{...state}
  }),
  on(newActions.getNewSuccess, (state,action) =>{
    console.log(action.type)
    return {...state,error:'', news: action.news, loading: false, isSuccess:true, numberOfNews:action.news.length}
  }),
  on(newActions.getNewFail,(state,action) =>{
    return {...state, error:action.error, loading:false, isSuccess:false}
  })
)
