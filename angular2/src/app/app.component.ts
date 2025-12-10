import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular2';


  getinputinfo(inputinfo : any){
    console.log(inputinfo.value);
  }

  name : string = "Hello Angular";

  isvalid : boolean = false;

  showdiv(){
    this.isvalid = true;
  }
  selectedPrducts : string = '';
  getProductval($event:Event){
    console.log(($event.target as HTMLInputElement).value)
    this.selectedPrducts = ($event.target as HTMLInputElement).value;
  }

  products = [
    {id:1,name:'laptop',price:45000},
    {id:2,name:'Mobile',price:45000},
    {id:3,name:'washing-machine',price:45000},
  ]


   users:{name : string}[] = [];
   
   createuser(uname:any){
    this.users.push({name:uname.value});
   }

   removeuser(){
    this.users.splice(this.users.length-1);// remove last item
   }

   removeitem(item:number){
    this.users.splice(item,1); // remove specific item
   }

}
