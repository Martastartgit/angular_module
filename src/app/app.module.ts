import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { UsersComponent } from './components/users/users/users.component';
import { UserComponent } from './components/users/user/user.component';
import { ChosenUserComponent } from './components/users/chosen-user/chosen-user.component';
import { PostsComponent } from './components/posts/posts/posts.component';
import { PostComponent } from './components/posts/post/post.component';
import { RouterModule, Routes} from '@angular/router';
import {UserResolveService} from './services/users/resolve/user-resolve.service';

const routes: Routes = [
  {path: 'users', component: UsersComponent, resolve: {usersData: UserResolveService},
  children: [{
    path: ':id', component: ChosenUserComponent, children: [{
      path: 'post', component: PostsComponent
    }]
  }]},
  {path: '', redirectTo: 'users', pathMatch: 'full' }
  ];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    ChosenUserComponent,
    PostsComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
