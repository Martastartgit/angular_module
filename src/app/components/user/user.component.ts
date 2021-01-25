import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {User} from '../../../models';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input()
  user: User;
  @Output()
  bubbleUp = new EventEmitter<User>();
  constructor() { }

  ngOnInit(): void {
  }
  getInfo(user: User): void {
    this.bubbleUp.emit(user);
  }

}
