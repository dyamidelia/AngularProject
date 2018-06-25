import { select } from '@angular-redux/store';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-transaction-details-summary',
  templateUrl: './transaction-details-summary.component.html',
  styleUrls: ['./transaction-details-summary.component.css']
})
export class TransactionDetailsSummaryComponent implements OnInit {
  @select(s => s.transaction_detail.transactionColumnsData) transactionColumnsData;
  constructor() { }
  preDefinedColumnNames: any = ['Transaction ID',
    'Source',
    'Destination',
    'Service Name',
    'Status',
    'State',
    'Timestamp'];
  filterArgs = { displayName: this.preDefinedColumnNames };
  ngOnInit() {
  }

}
