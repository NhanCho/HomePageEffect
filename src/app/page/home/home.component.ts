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

  constructor( private store:Store<{news:newState}>){
    this.new$= this.store.select('news');

  }
  getNews(){
    console.log('test')
  }


  ngOnInit(): void {
    this.store.dispatch(newActions.getPaginate({page: 1, per_page: 10}));
    this.new$.subscribe((value) => {
      if(value){
        console.log(value)

      }
    })
  }

}
