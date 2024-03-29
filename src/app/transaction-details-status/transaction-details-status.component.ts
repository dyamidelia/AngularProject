import { select } from '@angular-redux/store';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-transaction-details-status',
  templateUrl: './transaction-details-status.component.html',
  styleUrls: ['./transaction-details-status.component.less']
})
export class TransactionDetailsStatusComponent implements OnInit {
  @select(s => s.transaction_detail.transactionDetailsData) transactionDetailsData;


  constructor() { }

  ngOnInit() { }

}
