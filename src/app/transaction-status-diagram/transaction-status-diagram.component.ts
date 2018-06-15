import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-transaction-status-diagram',
  templateUrl: './transaction-status-diagram.component.html',
  styleUrls: ['./transaction-status-diagram.component.css']
})
export class TransactionStatusDiagramComponent implements OnInit {
  @Input('transactionStatusData') transactionStatusData : any;
  @Output() onSelectedTransactionChange = new EventEmitter();
  selectedTransaction : any = {};
  constructor() { }
  selectState(currentState){
    this.selectedTransaction = currentState;
    this.onSelectedTransactionChange.emit(this.selectedTransaction);
  }
  ngOnInit() {
    this.selectedTransaction = this.transactionStatusData[0];
  }

}
