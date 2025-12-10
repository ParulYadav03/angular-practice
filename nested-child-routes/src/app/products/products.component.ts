import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

users = [
  {name : 'product a'},
  {name : 'product a'},
  {name : 'product a'}
]

status : boolean = true;

}
