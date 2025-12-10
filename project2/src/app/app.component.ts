import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project2';

  products = [
    { id: 1, name: 'Product A' },
    { id: 2, name: 'product B'}
  ];
}
