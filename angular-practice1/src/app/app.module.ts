import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyContainerComponent } from './my-container/my-container.component';
import { TopNavComponent } from './my-container/top-nav/top-nav.component';
import { HeaderComponent } from './my-container/header/header.component';
import { Textsec1Component } from './my-container/textsec1/textsec1.component';
import { FeaturesComponent } from './my-container/features/features.component';
import { RouterModule, Routes } from '@angular/router';
import { BlogsComponent } from './my-container/blogs/blogs.component';
import { LoginComponent } from './my-container/login/login.component';


const appRoutes : Routes = [
  {path:'',redirectTo : 'login' , pathMatch : 'full'}, 
  {path: 'features', component: FeaturesComponent},
    {path: 'blogs' , component: BlogsComponent},
    {path: 'login' , component: LoginComponent}
  ]; 


@NgModule({
  declarations: [
    AppComponent,
    MyContainerComponent,
    TopNavComponent,
    HeaderComponent,
    Textsec1Component,
    FeaturesComponent,
    BlogsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
