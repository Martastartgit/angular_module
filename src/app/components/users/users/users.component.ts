import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../../interfaces/user/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  @Input()
  user: User;

  constructor() { }

  ngOnInit(): void {
  }
  delete(id): void {
    const arrayParse = JSON.parse(localStorage.getItem('user'));
    const parseFilter = arrayParse.filter(user => user.id !== id);
    localStorage.setItem('user', JSON.stringify(parseFilter));
    location.reload();
  }

}
