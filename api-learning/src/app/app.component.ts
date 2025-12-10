import { Component } from '@angular/core';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  products : any;
  constructor(private product:ProductsService){}
  ngOnInit(){
    this.product.getProducts().subscribe((data: any)=>{
      this.products = data.products;
      console.log(this.products);
    });
  }
}
