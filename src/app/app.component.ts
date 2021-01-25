import { Component } from '@angular/core';
import {Post} from '../models';
import {PostService} from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts: Post[];
  constructor(private postService: PostService) {
 }
 getPost(id: number): void {
    this.postService.getPostByUserId(id).subscribe(value => this.posts = value);

 }
}
