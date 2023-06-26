
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private BASE_URL = 'http://localhost:8081/quiz/';
  constructor(private http: HttpClient) { }

  getEvent(): Observable<any> {
    return this.http.get(`${this.BASE_URL}`+"list");
  }

  createEvent(event: Object): Observable<any> {
    return this.http.post(`${this.BASE_URL}`+"add", event);
  }
  updateEvent(event: Event): Observable<any> {
    return this.http.put(this.BASE_URL + 'quiz/updateQuiz', event);
  }




}