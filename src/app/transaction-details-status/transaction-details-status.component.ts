import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-transaction-details-status',
  templateUrl: './transaction-details-status.component.html',
  styleUrls: ['./transaction-details-status.component.css']
})
export class TransactionDetailsStatusComponent implements OnInit {
  @Input('transacationDetailsData') transacationDetailsData : any;
  
  
  constructor() { }

  ngOnInit() {}

}
