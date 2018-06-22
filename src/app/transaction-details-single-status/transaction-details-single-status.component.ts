import { select } from '@angular-redux/store';
import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
@Component({
  selector: 'app-transaction-details-single-status',
  templateUrl: './transaction-details-single-status.component.html',
  styleUrls: ['./transaction-details-single-status.component.css']
})
export class TransactionDetailsSingleStatusComponent implements OnInit, OnChanges {
  @select(s => s.transaction_detail.transacationDetailsData) transacationDetailsData;
  @select(s => s.transaction_detail.currentTransaction) selectedTransaction;
  current;
  changesDetected = false;
  constructor() { }

  ngOnInit() {
    this.selectedTransaction.subscribe((data) => this.current = data);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.transacationDetailsData && this.transacationDetailsData.length && !this.changesDetected) {
      // this.selectedTransaction = this.transacationDetailsData[0];
      this.changesDetected = true;
    }
  }
}
