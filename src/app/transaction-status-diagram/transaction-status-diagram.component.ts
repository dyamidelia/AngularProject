import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-transaction-status-diagram',
  templateUrl: './transaction-status-diagram.component.html',
  styleUrls: ['./transaction-status-diagram.component.css']
})
export class TransactionStatusDiagramComponent implements OnInit, OnChanges {
  @Input('transacationDetailsData') transacationDetailsData: any = [];
  @Output() selectedTransactionChange = new EventEmitter();

  selectedTransaction: any = {};
  changesDetected = false;
  constructor() { }
  selectState(currentState) {
    this.selectedTransaction = currentState;
    this.selectedTransactionChange.emit(this.selectedTransaction);
  }
  ngOnInit() {
    if (this.transacationDetailsData && this.transacationDetailsData.length) {
      this.selectedTransaction = this.transacationDetailsData[0];
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.transacationDetailsData && this.transacationDetailsData.length && !this.changesDetected) {
      this.selectState(this.transacationDetailsData[0]);
      this.changesDetected = true;
    }
  }

}
