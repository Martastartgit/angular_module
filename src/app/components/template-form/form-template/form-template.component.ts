import {Component, OnInit} from '@angular/core';
import { NgForm} from '@angular/forms';
import {User} from '../../../interfaces/user/user';

@Component({
  selector: 'app-form-template',
  templateUrl: './form-template.component.html',
  styleUrls: ['./form-template.component.css']
})

export class FormTemplateComponent implements OnInit {
  user = {name: '', age: '', email: ''};
  users: User[];

  constructor() { }

  ngOnInit(): void {
    this.getData();
  }
  submit(form: NgForm): void {
    const user = form.value;
    if (!user.id) {
      user.id = new Date().getTime();
    }
    this.localUser(user);
  }
  localUser(user): void {
    if (localStorage.hasOwnProperty('user')) {
      const userLocal = JSON.parse(localStorage.getItem('user'));
      userLocal.push(user);
      localStorage.setItem('user', JSON.stringify(userLocal));
      this.users = userLocal;
    } else {
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
