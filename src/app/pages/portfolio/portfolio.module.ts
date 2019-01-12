import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './portfolio.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

const appRoutes: Routes = [

  { path: '',  component: PortfolioComponent},
 
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes),
    MDBBootstrapModule,
  ],
  declarations: [PortfolioComponent]
})
export class PortfolioModule { }
