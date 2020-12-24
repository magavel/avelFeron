import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:3000/users';

  constructor(private httpClient: HttpClient) { }

  register(credential): void {
    const fullUrl = `${this.baseUrl}/register`;
    this.httpClient
       .post<any>(fullUrl, credential)
      .subscribe(createdUser => {
        console.log('createdUser', createdUser);
      });
  }
}
