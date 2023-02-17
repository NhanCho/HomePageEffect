import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
// import { Auth, onAuthStateChanged } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { AuthService } from './../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router:Router, private authService:AuthService){}

  user:any;

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return new Promise((resolve,reject)=>{
     {
        if(this.authService.user){
          resolve(true);
        }else{
          resolve(false)
          this.router.navigate([''])};
      }
    })
  };
}

