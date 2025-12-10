import { Component } from '@angular/core';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data-binding';


   //hello = "hiii";

   isdisabled = true;

   message(){
    alert("welcome to angular");
   }

   hello = "";
   
    /*
    users : string[] =  [];
   add(username: string){
    this.users.push(username);
   }

   delete(item:number){
    this.users.splice(item , 1)
   }
   */
   color : string = 'default';

   page = ''; // default empty

   name : string = 'Angular';

   onuserchange(user : string){
    this.name = user;
   }

   
  users:undefined|string[];

   userhandle(users : string[]){
    console.log(users);
    this.users = users;
   }
}
