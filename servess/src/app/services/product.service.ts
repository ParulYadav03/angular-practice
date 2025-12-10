import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() {
    console.log('ProductService initialized');
   }

   getproductdata(){
    return [
      {
        name:'laptop',branch:'dell',price:45000
      },
      {
        name:'mobile',branch:'samsung',price:25000
      },
      {
        name:'watch',branch:'fastrack',price:5000
      }
    ]
   }
}
