import { AuthService } from './service/auth.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '@angular/fire/auth';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'WebLogin';

  constructor(private authService:AuthService ){

  }

  user!: User|null;
  user$= new Observable<User|null>

  ngOnInit(): void {
      this.user$=this.authService.user$;
      this.user$.subscribe(user =>{
        this.user =user;
        console.log(user);
      })
  }

  login(){
    this.authService.loginWithGoogle();

  }
  logout(){
    this.authService.logout();
  }
}
