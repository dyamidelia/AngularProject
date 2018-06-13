import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {map} from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class SettingsHttpService {
  tsc_org_id='org_1';
  constructor(private http:Http) { }

  getStates(){
    return this.http.get(`/api/states/${this.tsc_org_id}`)
    .pipe(
      map(response=>response.json())
    );
  }
}
