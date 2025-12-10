import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClothesService {
  

  
  constructor() { }

  getclothes(){
    return [
      { name:'t-shirt',brand:'puma',price:1500 },
      { name:'jeans',brand:'levis',price:2500 },
      { name:'jacket',brand:'nike',price:3500 }
    ]
  }
  
}
