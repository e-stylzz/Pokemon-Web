import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SetsRoutingModule } from './sets-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    SetsRoutingModule
  ]
})
export class SetsModule { }
