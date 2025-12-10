import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent {
    

  // we use custom event to send data from child to parent by using output  or phir emit krte hai

  @Output() inputEvent = new EventEmitter();

  @Input() counttt: number = 0;
  @Output() countDecrease = new EventEmitter<void>();

   countt : any = 0;
   count(inp:any){
   if (inp.value.length > 0) {
     this.countt++;
      this.inputEvent.emit(inp.value);
   } 
   }

    
}