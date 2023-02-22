import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import * as newActions from 'src/app/action/new.action'
import { newState } from 'src/app/state/news.state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{


  new$= new Observable<newState>();
  current = 1;
  constructor( private store:Store<{news:newState}>){
    this.new$= this.store.select('news');

  }
  getNews(){
    this.store.dispatch(newActions.getPaginate({page: 1, per_page: 10}));
  }
  getNewsPage(){
    this.current += 1;
    this.store.dispatch(newActions.getPaginate({page: this.current, per_page: 10}));
  }
  getNewsPrev(){
    this.current -= 1;
    this.store.dispatch(newActions.getPaginate({page: this.current, per_page: 10}));
  }

  ngOnInit(): void {
    this.getNews();
    this.new$.subscribe((value) => {
      if(value){
        console.log(value)

      }
    })
  }

}
