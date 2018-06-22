import { select } from '@angular-redux/store';
import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-transaction-details-single-status',
  templateUrl: './transaction-details-single-status.component.html',
  styleUrls: ['./transaction-details-single-status.component.css']
})
export class TransactionDetailsSingleStatusComponent implements OnInit {
  @select(s => s.transaction_detail.transactionDetailsData) transactionDetailsData;
  @select(s => s.transaction_detail.currentTransaction) selectedTransaction;
  current;
  changesDetected = false;
  constructor() { }

  ngOnInit() {
    this.selectedTransaction.subscribe((data) => this.current = data);
  }

}
