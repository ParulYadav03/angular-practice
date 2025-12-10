import { Component } from '@angular/core';
import { ClothesService } from './services/clothes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  getclothes: any;

  constructor(private cloth:ClothesService ){}

  getclothedata(){
    this.getclothes=this.cloth.getclothes();
    console.log(this.getclothes);
}
}
