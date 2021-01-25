import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/users/user/user.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/posts/post/post.component';
import { ChosenUserComponent } from './components/chosen-user/chosen-user.component';
import { ChosenPostComponent } from './components/chosen-post/chosen-post.component';
import {RouterModule} from '@angular/router';
import { FullInfoUserComponent } from './components/chosen-user/full-info-user/full-info-user.component';
import { FullInfoPostComponent } from './components/chosen-post/full-info-post/full-info-post.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    PostsComponent,
    PostComponent,
    ChosenUserComponent,
    ChosenPostComponent,
    FullInfoUserComponent,
    FullInfoPostComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'link/users', component: UsersComponent, children: [{
          path:  ':id', component: ChosenUserComponent
        }]
      },
      {
        path: 'link/posts', component:  PostsComponent, children: [{
          path: ':userId/:id', component: ChosenPostComponent
        }]
      }
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
