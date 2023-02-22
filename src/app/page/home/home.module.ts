import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareMaterialModule } from 'src/app/module/share-material/share-material.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ShareMaterialModule
  ]
})
export class HomeModule { }
