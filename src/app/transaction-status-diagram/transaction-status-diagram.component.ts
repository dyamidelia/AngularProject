import { select ,NgRedux} from '@angular-redux/store';
import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import {ITransacationDetailsStates}  from '../transaction-details-page/transaction-details-page.reducer';
import {ON_TRANSACTION_CHANGE}  from '../transaction-details-page/transaction-details-page.actions';


@Component({
  selector: 'app-transaction-status-diagram',
  templateUrl: './transaction-status-diagram.component.html',
  styleUrls: ['./transaction-status-diagram.component.css']
})
export class TransactionStatusDiagramComponent implements OnInit, OnChanges {
  @select(s => s.transaction_detail.transacationDetailsData) transacationDetailsData;
  selectedTransaction: any = {};
  changesDetected = false;
  constructor(private redux: NgRedux <ITransacationDetailsStates>) { }
  selectState(currentState) {
    this.selectedTransaction = currentState;
    this.redux.dispatch({
      type: ON_TRANSACTION_CHANGE,
      currentTransaction:this.selectedTransaction
    });
  }
  ngOnInit() {
      this.transacationDetailsData.subscribe((data)=>{ 
        if (data && data.length) 
        this.selectedTransaction = data[0]
      }) ;
    }

  ngOnChanges(changes: SimpleChanges) {
    if (this.transacationDetailsData && this.transacationDetailsData.length && !this.changesDetected) {
      this.selectState(this.transacationDetailsData[0]);
      this.changesDetected = true;
    }
  }

}
