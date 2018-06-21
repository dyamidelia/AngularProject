import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-transaction-details-single-status',
  templateUrl: './transaction-details-single-status.component.html',
  styleUrls: ['./transaction-details-single-status.component.css']
})
export class TransactionDetailsSingleStatusComponent implements OnInit, OnChanges {
  @Input('selectedTransaction') selectedTransaction: any;
  @Input('transacationDetailsData') transacationDetailsData: any = [];
  changesDetected = false;
  constructor() { }

  ngOnInit() { }

  ngOnChanges(changes: SimpleChanges) {
    if (this.transacationDetailsData && this.transacationDetailsData.length && !this.changesDetected) {
      this.selectedTransaction = this.transacationDetailsData[0];
      this.changesDetected = true;
    }
  }

}
