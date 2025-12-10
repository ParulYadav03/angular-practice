import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //name= new FormControl();
  //password=new FormControl();



//displayvalue(){
// console.log(this.name.value)
// console.log(this.password.value)
//}

  profileForm= new FormGroup<any> ({
    name : new FormControl('' , [Validators.required]),
    password: new FormControl('',[Validators.required,Validators.minLength(5)]),
    email: new FormControl('', [Validators.required, Validators.maxLength(50)])
  });

  onSubmit(){
    console.log(this.profileForm.value);
  }

  setValues(){
    this.profileForm.setValue(
      {
      name : "Parul",
      password : "parul123",
      email : "parul@gmail.com"
    }
  )
  }

  get name(){
  return this.profileForm.get('name');
  }

  get password(){
    return this.profileForm.get('password');
  }

  get email(){
    return this.profileForm.get('email');
  }

}
