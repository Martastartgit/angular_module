import { Injectable } from '@angular/core';
import {Resolve} from '@angular/router';
import {Post} from '../../interface/post';
import {PostService} from '../post.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostResolveService implements Resolve<Post[]>{

  constructor(private postService: PostService) { }
  resolve(): Observable<Post[]> | Promise<Post[]> | Post[] {
    return this.postService.getAllPost();
  }

}
