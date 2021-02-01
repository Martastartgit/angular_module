import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Post} from '../interface/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private httpClient: HttpClient) { }

  getAllPost(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(this.url);
  }
  getPostsByUserId(userId): Observable<Post[]> {
    return this.httpClient.get<Post[]>(`${this.url}?userId=${userId}`);
  }
}
