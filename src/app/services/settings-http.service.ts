import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SettingsHttpService {
  tsc_org_id = 'org_1';
  hitURL = 'http://10.102.17.21:8080/rest';
  constructor(private http: HttpClient) { }
  //  <======================== Services for State Configuration ============================================>
  getStates() {
    return this.http.get(`${this.hitURL}/states/${this.tsc_org_id}`);
  }
  editState(stateObj) {
    // Model Schema
    //  {
    //    'state_desp': 'string',
    //    'state_name': 'string',
    //    'tsc_org_id': 'string'
    //  }
    return this.http.put(`${this.hitURL}/states/${stateObj.id}`,
      {
        'state_desp': 'desc',
        'state_name': stateObj.state,
        'tsc_org_id': this.tsc_org_id

      });
  }
  setState(newState) {
    // Model Schema
    //  {
    //    'state_desp': 'string',
    //    'state_name': 'string',
    //    'tsc_org_id': 'string'
    //  }
    return this.http.post(`${this.hitURL}/states/`,
      {
        'state_desp': 'desc',
        'state_name': newState,
        'tsc_org_id': this.tsc_org_id

      });
  }
  delState(stateId) {
    return this.http.delete(`${this.hitURL}/states/${stateId}`);
  }
  //  <======================== Services for Status Configuration ============================================>
  getStatuses() {
    return this.http.get(`${this.hitURL}/statuses/${this.tsc_org_id}`);
  }
  editStatus(statusObj) {
    // Model Schema
    //  {
    //    'state_desp': 'string',
    //    'state_name': 'string',
    //    'tsc_org_id': 'string'
    //  }
    return this.http.put(`${this.hitURL}/statuses/${statusObj.id}`,
      {
        'status_desp': 'desc',
        'status_name': statusObj.status,
        'tsc_org_id': this.tsc_org_id

      });
  }
  setStatus(newState) {
    // Model Schema
    //  {
    //    'state_desp': 'string',
    //    'status_name': 'string',
    //    'tsc_org_id': 'string'
    //  }
    return this.http.post(`${this.hitURL}/statuses/`,
      {
        'state_desp': 'desc',
        'status_name': newState,
        'tsc_org_id': this.tsc_org_id

      });
  }
  delStatus(statusId) {
    return this.http.delete(`${this.hitURL}/statuses/${statusId}`);
  }
}
