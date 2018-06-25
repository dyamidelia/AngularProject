import { select, NgRedux } from '@angular-redux/store';
import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { ITransactionDetailsStates } from '../transaction-details-page/transaction-details-page.reducer';
import { ON_TRANSACTION_CHANGE } from '../transaction-details-page/transaction-details-page.actions';


@Component({
  selector: 'app-transaction-status-diagram',
  templateUrl: './transaction-status-diagram.component.html',
  styleUrls: ['./transaction-status-diagram.component.less']
})
export class TransactionStatusDiagramComponent implements OnInit {
  @select(s => s.transaction_detail.transactionDetailsData) transactionDetailsData;
  @select(s => s.transaction_detail.currentTransaction) currentTransaction;
  selectedTransaction: any = {};
  changesDetected = false;

  constructor(private redux: NgRedux<ITransactionDetailsStates>) { }
  selectState(currentState) {
    this.selectedTransaction = currentState;
    this.redux.dispatch({
      type: ON_TRANSACTION_CHANGE,
      currentTransaction: this.selectedTransaction
    });
  }
  ngOnInit() {

    this.transactionDetailsData.subscribe((data) => {
      if ((data && data.length) && !this.selectedTransaction) {
        this.selectedTransaction = data[0];
      }
    });
    this.currentTransaction.subscribe((data) => {
      if (data) {
        this.selectedTransaction = data;
      }
    });
  }
}
