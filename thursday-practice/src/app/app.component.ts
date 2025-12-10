import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

  users:string[] = [];

  remove(item : number){
    this.users.splice(item , 1);
  }

  admins:string[] = [];


  

  pushusers(data:string){
    this.users.push(data);
  }


  // 

  countt: number = 0;

removeadmin(i: number) {
  this.admins.splice(i, 1);   // admin remove
  this.countt--;              // parent count decrease

  // child ko bhi event bhejna hai
  this.handleDecrease();
}

handleDecrease() {
  this.countt--;    // child event aaya toh parent count aur decrease ho
}

}