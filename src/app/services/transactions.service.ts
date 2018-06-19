import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  constructor( private http: Http) { }

  getTransactions(){
    return this.http.get('http://10.102.17.21:8080/rest/transactions/org_1/user-trans-id/123')
    .pipe(map(res=>res.json()));
  }

  getColumns(){
    return this.http.get('http://10.102.17.21:8080/rest/columnConfigs/3aa41148-e1ab-4b35-a9aa-abf70ba69a17')
    .pipe(map(res=>res.json()));
  }

}

