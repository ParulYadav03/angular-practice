import { Component } from '@angular/core';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
   productdata:any;
  constructor(private productService:ProductService) { }

  getproductdata(){
    this.productdata=this.productService.getproductdata();
    console.log(this.productdata);
  }
}
