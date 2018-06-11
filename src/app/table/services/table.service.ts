import { Injectable } from '@angular/core';
import { NgRedux} from '@angular-redux/store';
import { IAppState} from '../../store'
import { Http } from '@angular/http';
import {  } from '../actions'

@Injectable({
  providedIn: 'root'
})
export class TableService {

  private readonly url = 'https://jsonplaceholder.typicode.com/todos';
  private readonly url2 = 'https://jsonplaceholder.typicode.com/users';

  constructor(private ngRedux: NgRedux<IAppState>, private http: Http) { }

  loadTransactions(){
    //this.ngRedux.dispatch({ type: "GET_TRANSACTIONS_REQUEST" });

    this.http.get(this.url).subscribe(todos => {
      //this.ngRedux.dispatch({ type: GET_TRANSACTIONS_SUCCESS, todos: todos.json() });
    }, err => {
      //this.ngRedux.dispatch({ type: "GET_TRANSACTIONS_FAILURE" });
    });
  
  }

  loadColumnHeaders(){
    //this.ngRedux.dispatch({ type: "GET_TRANSACTIONS_REQUEST" });

    this.http.get(this.url2).subscribe(users => {
      //this.ngRedux.dispatch({ type: GET_COlUMNS_SUCCESS, users: users.json() });
    }, err => {
      //this.ngRedux.dispatch({ type: "GET_TRANSACTIONS_FAILURE" });
    });
  
  }

  postTransactions(data){
  
    this.http.post(this.url, data).subscribe(todos => {
      //this.ngRedux.dispatch({ type: POST_TRANSACTIONS_SUCCESS, title: data.value });
    }, err => {
      //this.ngRedux.dispatch({ type: "GET_TRANSACTIONS_FAILURE" });
    });
  
  }
}
