import { Component, Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  @Output() getusers = new EventEmitter<string[]>();
  users: string[] = ['anil', 'sunil', 'rahul'];

loaddata() {
 this.getusers.emit(this.users);

}

}

