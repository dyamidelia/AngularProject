import { Injectable } from '@angular/core';
import { NgRedux} from '@angular-redux/store';
import { IAppState} from '../../store'
import { Http } from '@angular/http';
import { GET_TRANSACTIONS_SUCCESS, GET_COLUMNS_SUCCESS } from '../actions'

@Injectable({
  providedIn: 'root'
})
export class TableService {

  //private readonly url = 'https://my-json-server.typicode.com/dyamidelia/demo/cols';
  private readonly swaggerUrl = 'http://10.102.17.21:8080/rest/transactions/org_1/user-trans-id/123';
  //private readonly url = ' https://jsonplaceholder.typicode.com/todos';

  constructor(private ngRedux: NgRedux<IAppState>, private http: Http) { }

  loadTransactions(){
    //this.ngRedux.dispatch({ type: "GET_TRANSACTIONS_REQUEST" });

    this.http.get(this.swaggerUrl).subscribe(transactions => {
      this.ngRedux.dispatch({ type: GET_TRANSACTIONS_SUCCESS, transactions: transactions.json() });
    }, err => {
      //this.ngRedux.dispatch({ type: "GET_TRANSACTIONS_FAILURE" });
    });
  
  }

  loadColumnHeaders(){
    //this.ngRedux.dispatch({ type: "GET_TRANSACTIONS_REQUEST" });

    this.http.get(this.swaggerUrl).subscribe(todos => {
      this.ngRedux.dispatch({ type: GET_COLUMNS_SUCCESS, todos: todos.json() });
    }, err => {
      //this.ngRedux.dispatch({ type: "GET_TRANSACTIONS_FAILURE" });
    });
  }

  postTransactions(data){
  
    this.http.post(this.swaggerUrl, data).subscribe(todos => {
      //this.ngRedux.dispatch({ type: POST_TRANSACTIONS_SUCCESS, title: data.value });
    }, err => {
      //this.ngRedux.dispatch({ type: "GET_TRANSACTIONS_FAILURE" });
    });
  
  }
}
