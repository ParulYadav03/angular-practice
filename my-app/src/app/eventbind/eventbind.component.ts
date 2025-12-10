import { Component } from '@angular/core';

@Component({
  selector: 'app-eventbind',
  templateUrl: './eventbind.component.html',
  styleUrls: ['./eventbind.component.css']
})
export class EventbindComponent {

  msg:string = "";
  onaddcart(event : Event){
  const inputelement = event.target as HTMLInputElement;
  this.msg= inputelement.value + "product added in cart";
  }

  onInputClick(event:Event){
    const input = event.target as HTMLInputElement;
    console.log(input.value);
  }

  getInputInfo(InputInfo:HTMLInputElement){
    console.log(InputInfo.value);
  }

}
