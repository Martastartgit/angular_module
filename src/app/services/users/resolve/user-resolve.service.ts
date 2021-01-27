import { Injectable } from '@angular/core';
import {Resolve} from '@angular/router';
import {User} from '../../../../interfaces';
import {UsersService} from '../users.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserResolveService implements Resolve<User[]>{

  constructor(private userService: UsersService) { }
  resolve(): Observable<User[]> | Promise<User[]> | User[] {
    return this.userService.getAllUsers();
  }
}
