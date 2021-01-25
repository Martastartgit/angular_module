import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../../../interfaces';

@Component({
  selector: 'app-full-info-user',
  templateUrl: './full-info-user.component.html',
  styleUrls: ['./full-info-user.component.css']
})
export class FullInfoUserComponent implements OnInit {
  @Input()
  chosenUser: User;

  constructor() { }

  ngOnInit(): void {
  }

}
