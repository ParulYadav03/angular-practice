import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'primeng';

  sizes = [
  { name: 'Small', class: 'small' },
  { name: 'Medium', class: 'medium' },
  { name: 'Large', class: 'large' }
];

selectedSize = 'medium';

  products = [
    { code: 1, Name: "Parul", Category: "Accessories", Quantity: 24 },
     { code: 2, Name: "Parul Yadav", Category: "Accessories", Quantity: 23 },
  ];
cols: any[]|undefined;
  cars: any[] = [];

  ngOnInit() {
    this.cols = [
        {field: 'id', header: 'Id'},
        { field: 'brand', header: 'Brand' },
        { field: 'year', header: 'Year' },
        { field: 'color', header: 'Color' },
        { field: 'vin', header: 'VIN' }
    ];

    this.cars = [
        {id: 1, brand: 'Toyota', year: 2019, color: 'White', vin: 'A123' },
        {id: 2, brand: 'Honda', year: 2020, color: 'Black', vin: 'B456' },
        {id: 3, brand: 'Ford', year: 2018, color: 'Blue',  vin: 'C789' },
        {id: 4, brand: 'Toyota', year: 2019, color: 'White', vin: 'A123' },
        {id: 5, brand: 'Toyota', year: 2019, color: 'White', vin: 'A123' },
        {id: 6, brand: 'Toyota', year: 2019, color: 'White', vin: 'A123' },
        {id: 7, brand: 'Toyota', year: 2019, color: 'White', vin: 'A123' },
        {id: 8, brand: 'Toyota', year: 2019, color: 'White', vin: 'A123' },
        {id: 9, brand: 'Toyota', year: 2019, color: 'White', vin: 'A123' },
        {id: 10, brand: 'Toyota', year: 2019, color: 'White', vin: 'A123' },
    ];
}

}
