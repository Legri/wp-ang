import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MyblogComponent } from './myblog.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';

const appRoutes: Routes = [

  { path: '',  component: MyblogComponent},
 
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes),
    MDBBootstrapModule,
    FormsModule,
    NgxPaginationModule
  ],
  declarations: [MyblogComponent]
})
export class MyblogModule { }
