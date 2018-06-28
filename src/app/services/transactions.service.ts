import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import {hitURL} from '../app.globals';
@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  constructor(private http: Http) { }

  getTransactions() {
    return this.http.post(`${hitURL}/transactions/org_1/3aa41148-e1ab-4b35-a9aa-abf70ba69a17/1`, [])
      .pipe(map(res => res.json()));
  }

  getColumns() {
    return this.http.get(`${hitURL}/columnConfigs/3aa41148-e1ab-4b35-a9aa-abf70ba69a17`)
      .pipe(map(res => res.json()));
  }

  postColumns( postData) {
    return this.http.post(`${hitURL}/columnConfigs/3aa41148-e1ab-4b35-a9aa-abf70ba69a17`, postData)
      .pipe(map(res => res.json()));
  }
  searchFilterColumns( postData) {
    return this.http.post(`${hitURL}/transactions/org_1/3aa41148-e1ab-4b35-a9aa-abf70ba69a17/1`, postData)
      .pipe(map(res => res.json()));
  }

}
