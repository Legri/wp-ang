import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MyblogComponent } from './myblog.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

const appRoutes: Routes = [

  { path: '',  component: MyblogComponent},
 
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes),
    MDBBootstrapModule
  ],
  declarations: []
})
export class MyblogModule { }
