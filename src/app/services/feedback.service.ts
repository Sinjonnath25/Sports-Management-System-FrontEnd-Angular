import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private _http: HttpClient) { }

  //load all the sponsors
  public feedbacks() {
    return this._http.get(`${baseUrl}/feedback/`);
  }

  //add new sponsors
  public addFeedback(feedback) {
    return this._http.post(`${baseUrl}/feedback/`, feedback);
  }
}
