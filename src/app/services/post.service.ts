import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Post} from '../../interfaces';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private httpClient: HttpClient) { }
  getAllPosts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(this.url);
  }
  getPostsByUserId(userId): Observable<Post[]> {
    return this.httpClient.get<Post[]>(`${this.url}?userId=${userId}`);
  }
}
