import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductsComponent } from './products/products.component';
import {Routes, RouterModule} from "@angular/router";
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { CommonComponent } from './common/common.component';

const routes : Routes = [
  {path: '',component:HomeComponent,
    
  },
  {path: 'products' , component: ProductsComponent,
    
  },
  {path: 'about',component : AboutComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductsComponent,
    AboutComponent,
    HomeComponent,
    CommonComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
