import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router : Router) {}

  users : string[] = [];

  add(username: string){
    this.users.push(username);
    this.checkLimit();
  }

  del(i : number){
    this.users.splice(i,1);
  }
  checkLimit(){
     if(this.users.length >= 3){
      this.router.navigate(['products']);
     }

    }
}
