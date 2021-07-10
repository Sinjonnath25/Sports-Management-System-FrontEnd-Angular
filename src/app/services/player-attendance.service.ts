import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baseUrl from './helper';
@Injectable({
  providedIn: 'root'
})
export class PlayerAttendanceService {

  constructor(private _http: HttpClient) { }

  //load all the sponsors
  public playerAttendances() {
    return this._http.get(`${baseUrl}/playerAttendance/`);
  }

  //add new sponsors
  public addAttendance(playerAttendance) {
    return this._http.post(`${baseUrl}/playerAttendance/`, playerAttendance);
  }

}
