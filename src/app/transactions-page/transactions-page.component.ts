import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState} from '../store'
import { ACTION1 } from '../actions'; 

@Component({
  selector: 'app-transactions-page',
  templateUrl: './transactions-page.component.html',
  styleUrls: ['./transactions-page.component.css']
})
export class TransactionsPageComponent implements OnInit {
  
  @select() data;
  constructor(private ngRedux: NgRedux<IAppState>) { }

  testFunction(){
  	this.ngRedux.dispatch({ type: 'ACTION1'});
  }

  ngOnInit() {
  }

}
