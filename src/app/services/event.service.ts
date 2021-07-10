import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private _http: HttpClient) {}

  public events() {
    return this._http.get(`${baseUrl}/event/`);
  }

  //add quiz
  public addEvent(event) {
    return this._http.post(`${baseUrl}/event/`, event);
  }

  //delete quiz
  public deleteEvent(eid) {
    return this._http.delete(`${baseUrl}/event/${eid}`);
  }

  //get the single quiz

  public getEvent(eid) {
    return this._http.get(`${baseUrl}/event/${eid}`);
  }

  //update quiz
  public updateEvent(event) {
    return this._http.put(`${baseUrl}/event/`, event);
  }

  /*get quizzes of category
  public getQuizzesOfCategory(cid) {
    return this._http.get(`${baseUrl}/event/category/${cid}`);
  }*/
  //qet active quizzes
  public getActiveEvents() {
    return this._http.get(`${baseUrl}/event/active`);
  }

  /**get active quizzes of category
  public getActiveQuizzesOfCategory(cid) {
    return this._http.get(`${baseUrl}/event/category/active/${cid}`);
  }*/

}
