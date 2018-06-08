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
  constructor(
    private route: ActivatedRoute,
    private transactionDetailsService:TransactionDetailsService
  ) { }

  ngOnInit() {
  	  	this.route.paramMap
  		.subscribe(params => {
         let transactionId=params.get('transactionId');
         let userId = params.get('userId');
         if (transactionId && userId) 
         this.transacationDetailsData= this.transactionDetailsService.getTransactionDetails(transactionId,userId);
         this.transacationColumnsData= this.transactionDetailsService.getDisplayNamesForColumns();
         
         this.transacationColumnsData = this.transacationColumnsData.map((item,index) => {
            item['display_value']=this.transacationDetailsData[0][item.col_name];
            return item;
          })
          console.log(this.transacationColumnsData);
  		});
  }
}
