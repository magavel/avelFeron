import { Injectable } from '@angular/core';
import { Article } from '../models/Article'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {
  constructor(private http: HttpClient) {}

  private articlesUrl = 'http://localhost:3000/articles';

  /** GET Articles from the server */
  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(this.articlesUrl);
  }
   
}
