import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TransactionDetailsService } from '../services/transaction-details.service';


@Component({
  selector: 'app-transaction-details-page',
  templateUrl: './transaction-details-page.component.html',
  styleUrls: ['./transaction-details-page.component.css'],
  providers: [TransactionDetailsService]
})
export class TransactionDetailsPageComponent implements OnInit {
  transacationDetailsData: any;
  transacationColumnsData: any;
  transactionStatusData: any;
  currentTransaction: any;
  showFullStatus = false;
  constructor(
    private route: ActivatedRoute,
    private transactionDetailsService: TransactionDetailsService
  ) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe(params => {
        const transactionId = params.get('transactionId');
        const userId = params.get('userId');
        // if (transactionId && userId)
        this.transacationDetailsData = this.transactionDetailsService.getTransactionDetails(transactionId, userId);
        this.transacationColumnsData = this.transactionDetailsService.getDisplayNamesForColumns();
        this.transactionStatusData = this.transactionDetailsService.getTransactionStatusResponse();

        this.transacationColumnsData = this.transacationColumnsData.map((item, index) => {
          item['display_value'] = this.transacationDetailsData[0][item.col_name];
          return item;
        });
      });
  }

  onTransactionStateChange(currentTransaction) {
    this.currentTransaction = currentTransaction;
  }
}
