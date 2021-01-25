import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {User} from '../../../models';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  chosenUser: User;

  @Output()
  eventEmitter = new EventEmitter<number>();

  constructor(private userService: UserService) { }
  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(value => this.users = value);

  }
  getBubble(user: User): void {
    this.chosenUser = user;
  }
  getEventEmitter(id: number): void {
    this.eventEmitter.emit(id);
  }

}
