import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../../interfaces/user/user';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  users: User[];
  name = new FormControl('', [Validators.required,
    Validators.minLength(4)]);
  age = new FormControl('', [Validators.required, this.customValidatorAge]);
  email = new FormControl('', [Validators.required,
    Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]);

  myForm = new FormGroup({
    name: this.name,
    age: this.age,
    email: this.email
  });
  ngOnInit(): void {
    this.getData();
  }
  submit(myForm: FormGroup): void {
    console.log(myForm);
    const user = myForm.value;
    if (!user.id) {
      user.id = new Date().getTime();
    }
    this.localUser(user);
  }
  customValidatorAge(inputData: AbstractControl): any {
    if (inputData.value <= 12){
      return {error : true, msg : 'Age is too small'};
    }
    return null;
  }

  localUser(user): any {
    if (localStorage.hasOwnProperty('user')) {
      const userLocal = JSON.parse(localStorage.getItem('user'));
      userLocal.push(user);
      localStorage.setItem('user', JSON.stringify(userLocal));
      this.users = userLocal;
    }else {
      localStorage.setItem('user', JSON.stringify([user]));
      this.users = JSON.parse(localStorage.getItem('user'));
    }
  }
  getData(): void {
    if (localStorage.hasOwnProperty('user')) {
      this.users = JSON.parse(localStorage.getItem('user'));
    }
  }
}
