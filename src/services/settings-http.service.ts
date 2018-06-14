import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {map} from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class SettingsHttpService {
  tsc_org_id='org_1';
  hitURL='http://10.102.17.21:8080/rest';
  constructor(private http:Http) { }

  getStates(){
    return this.http.get(`${this.hitURL}/states/${this.tsc_org_id}`)
    .pipe(
      map(response=>response.json())
    );
  }
  setState(newState){
    return this.http.post(`${this.hitURL}/states/`,
      {
          "state_desp": "desc",
          "state_name": newState,
          "tsc_org_id": this.tsc_org_id

      });

    //Model Schema
    // {
    //   "state_desp": "string",
    //   "state_name": "string",
    //   "tsc_org_id": "string"
    // }
  }
}
