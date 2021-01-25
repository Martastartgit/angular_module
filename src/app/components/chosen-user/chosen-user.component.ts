import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from '../../../models';

@Component({
  selector: 'app-chosen-user',
  templateUrl: './chosen-user.component.html',
  styleUrls: ['./chosen-user.component.css']
})
export class ChosenUserComponent implements OnInit {
  @Input()
  chosenUser: User;
  @Output()
  emitter = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }
  getUserId(id: number): void {
    this.emitter.emit(id);
  }

}
