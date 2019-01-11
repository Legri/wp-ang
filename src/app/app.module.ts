import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { Page404Component } from './pages/page404/page404.component';
import { HeaderComponent } from './pages/template/header/header.component';
import { FooterComponent } from './pages/template/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { PostComponent } from './pages/project/post.component';

import { GuardpagesGuard } from './guardpages.guard';
import { GetcontentserviceService} from '../app/services/getcontentservice.service'

import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {NgxPaginationModule} from 'ngx-pagination';

import { BlogComponent } from './pages/blog/blog.component';
import { MyblogComponent } from './pages/myblog/myblog.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { NgxSpinnerModule } from 'ngx-spinner';



const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contacts',      component: ContactsComponent ,canActivate: [GuardpagesGuard] },
  { path: 'login',      component: LoginComponent },
  { path: 'post/:id',      component: PostComponent },
  { path: 'blog/:id',      component: BlogComponent },
  { path: 'myblog',      component: MyblogComponent },
  { path: 'portfolio',      component: PortfolioComponent },
  { path: '404',     component: Page404Component },
   { path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: '**', component: Page404Component }
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AboutComponent,
    ContactsComponent,
    Page404Component,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PostComponent,
    BlogComponent,
    MyblogComponent,
    PortfolioComponent,
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    Ng4LoadingSpinnerModule.forRoot(),
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    NgbModule,
    MDBBootstrapModule.forRoot(),
    NgxPaginationModule,
    NgxSpinnerModule
    
    
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [GuardpagesGuard,GetcontentserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
