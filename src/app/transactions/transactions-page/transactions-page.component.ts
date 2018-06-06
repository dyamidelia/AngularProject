import { Component, OnInit } from '@angular/core';
import { NgRedux, select} from '@angular-redux/store';
import { ActivatedRoute } from '@angular/router';
import { IAppState} from '../../store';
import { TransactionsService } from '../services/transactions.service';



@Component({
  selector: 'app-transactions-page',
  templateUrl: './transactions-page.component.html',
  styleUrls: ['./transactions-page.component.css']
})
export class TransactionsPageComponent implements OnInit { 

  @select(s => s.transactions.newMessages) newMessages; 
  @select(s => s.transactions.todos) todos;

  constructor(private ngRedux: NgRedux<IAppState>, private service: TransactionsService) { 
 
  }

  ngOnInit() {
    this.service.loadTransactions();
  }

}
