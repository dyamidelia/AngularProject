import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-transaction-details-single-status',
  templateUrl: './transaction-details-single-status.component.html',
  styleUrls: ['./transaction-details-single-status.component.css']
})
export class TransactionDetailsSingleStatusComponent implements OnInit {
  @Input('transactionStatusData') transactionStatusData : any;
  selectedTransaction : any = {};
  constructor() { }
  selectState(currentState){
    this.selectedTransaction = currentState;
  }
  ngOnInit() {
    this.selectedTransaction = this.transactionStatusData[0];
  }

}
