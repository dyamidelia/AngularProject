import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  constructor(private http: Http) { }

  getTransactions() {
    return this.http.post('http://10.102.17.21:8080/rest/transactions/org_1/3aa41148-e1ab-4b35-a9aa-abf70ba69a17/1', [])
      .pipe(map(res => res.json()));
  }

  getColumns() {
    return this.http.get('http://10.102.17.21:8080/rest/columnConfigs/3aa41148-e1ab-4b35-a9aa-abf70ba69a17')
      .pipe(map(res => res.json()));
  }

  postColumns( postData) {
    return this.http.post('http://10.102.17.21:8080/rest/columnConfigs/3aa41148-e1ab-4b35-a9aa-abf70ba69a17', postData)
      .pipe(map(res => res.json()));
  }

}

