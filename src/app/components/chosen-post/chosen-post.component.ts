import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PostService} from '../../services';
import {Post} from '../../../interfaces';

@Component({
  selector: 'app-chosen-post',
  templateUrl: './chosen-post.component.html',
  styleUrls: ['./chosen-post.component.css']
})
export class ChosenPostComponent implements OnInit {
  userId: number;
  chosenPost: Post[];

  constructor(private activatedRoute: ActivatedRoute, private postService: PostService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(value => {
      this.userId = value.userId;
      this.postService.getPostsByUserId(this.userId).subscribe(item => this.chosenPost = item);
    });
  }
}
