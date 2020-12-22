import { Injectable } from '@angular/core';
import { Experience} from '../models/Experience';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  constructor(private http: HttpClient) {}

  private experiencesUrl = 'http://localhost:3000/experiences';
  private httpHeaders = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
    /** GET Articles from the server */
    getExperience(): Observable<Experience[]> {
      return this.http.get<Experience[]>(this.experiencesUrl);
    }


    createExperience(article: Experience): Observable<Experience> {
      return  this.http.post<Experience>(this.experiencesUrl, article);
    }

    deleteExperience(experience: Experience): Observable<Experience> {
      const fullUrl = `${this.experiencesUrl}/${experience._id}`;
      return this.http.delete<Experience>(fullUrl , this.httpHeaders);
    }


  }
