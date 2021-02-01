import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsersComponent} from './components/users/users.component';
import {UserResolveService} from './service/resolve/user-resolve.service';
import {ChosenUserComponent} from './components/chosen-user/chosen-user.component';

const routes: Routes = [
  {path: '', component: UsersComponent, resolve: {usersData: UserResolveService}, children: [
      {path: ':id', component: ChosenUserComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
