import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../../../interfaces';

@Component({
  selector: 'app-full-info-post',
  templateUrl: './full-info-post.component.html',
  styleUrls: ['./full-info-post.component.css']
})
export class FullInfoPostComponent implements OnInit {
  @Input()
  fullPost: Post;

  constructor() { }

  ngOnInit(): void {
  }

}
