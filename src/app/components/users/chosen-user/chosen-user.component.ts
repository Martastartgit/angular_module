import { Component, OnInit } from '@angular/core';
import {User} from '../../../../interfaces';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-chosen-user',
  templateUrl: './chosen-user.component.html',
  styleUrls: ['./chosen-user.component.css']
})
export class ChosenUserComponent implements OnInit {
  user: User;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.params.subscribe( value => {
      this.user = this.router.getCurrentNavigation().extras.state as User;
    });
  }

  ngOnInit(): void {
  }

  goToPost(): void {
    this.router.navigate(['post'], {relativeTo: this.activatedRoute, state: this.user});
  }

}
