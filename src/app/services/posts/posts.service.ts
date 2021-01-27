import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Post} from '../../../interfaces';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private httpClient: HttpClient) { }

  getUserPost(userId): Observable<Post[]> {
    return this.httpClient.get<Post[]>(`${this.url}?userId=${userId}`);
  }
}
