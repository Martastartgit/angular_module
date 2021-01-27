import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PostsService} from '../../../services/posts/posts.service';
import {Post} from '../../../../interfaces';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[];

  constructor(private activatedRoute: ActivatedRoute, private postsService: PostsService, private router: Router) {
     this.activatedRoute.params.subscribe(value => {
       const {id} = this.router.getCurrentNavigation().extras.state;
       this.postsService.getUserPost(id).subscribe(item => this.posts = item);
     });
  }

  ngOnInit(): void {
  }

}
