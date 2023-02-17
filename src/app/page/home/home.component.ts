import { HttpService } from './../../service/http.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/model/news.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  new$ = new Observable<News[]>();

  constructor(private HttpService:HttpService){}
  ngOnInit(): void {
    this.new$ = this.HttpService.get();
  }

}
