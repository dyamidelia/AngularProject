import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {TransactionDetailsService} from '../services/transaction-details.service';


@Component({
  selector: 'app-transaction-details-page',
  templateUrl: './transaction-details-page.component.html',
  styleUrls: ['./transaction-details-page.component.css'],
  providers: [TransactionDetailsService]
})
export class TransactionDetailsPageComponent implements OnInit {
  transacationDetailsData:any;
  transacationColumnsData:any;
  currentTransaction:any = {};
  showFullStatus:boolean = false;
  constructor(
    private route: ActivatedRoute,
    private service:TransactionDetailsService
  ) { }

  ngOnInit() {
  	  	this.route.paramMap
  		.subscribe(params => {
         let transactionId=params.get('transactionId');
         let userId = params.get('userId');
         // if (transactionId && userId) 
         //Mapping the column names to transaction response         
         this.service.getDisplayNamesForColumns().subscribe(response => {
          this.transacationColumnsData= response;
          this.service.getTransactionDetails(transactionId,userId).subscribe(response => {
            this.transacationDetailsData = response;
             this.transacationColumnsData = this.transacationColumnsData.map((item,index) => {
              item['display_value']=this.transacationDetailsData[0][item.col_name];
              return item;
            })
           });
         });
  		});
  }

  // Mapping the transaction and column names on transaction state change  
  onTransactionStateChange(currentTransaction){
    this.currentTransaction = currentTransaction;
    this.transacationColumnsData = this.transacationColumnsData.map((item,index) => {
      item['display_value']=this.currentTransaction[item.col_name];
      return item;
    })
  }
}
