import { Injectable } from '@angular/core';
import { Article } from '../models/Article';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {

  constructor(private http: HttpClient) {}

  private articlesUrl = 'http://localhost:3000/articles';
  private httpHeaders = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  /** GET Articles from the server */
  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(this.articlesUrl);
  }


  createArticle(article: Article): Observable<Article> {
    return  this.http.post<Article>(this.articlesUrl, article);
  }

  deleteArticle(article: Article): Observable<Article> {
    const fullUrl = `${this.articlesUrl}/${article._id}`;
    return this.http.delete<Article>(fullUrl , this.httpHeaders);
  }


}
