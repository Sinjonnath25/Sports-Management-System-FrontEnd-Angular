import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class SponsorService {

  constructor(private _http: HttpClient) { }

  //load all the sponsors
  public sponsors() {
    return this._http.get(`${baseUrl}/sponsor/`);
  }

  //add new sponsors
  public addSponsor(sponsor) {
    return this._http.post(`${baseUrl}/sponsor/`, sponsor);
  }

}
