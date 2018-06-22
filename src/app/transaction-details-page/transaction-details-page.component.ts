import { NgRedux, select } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TransactionDetailsService } from '../services/transaction-details.service';
import { ITransactionDetailsStates } from './transaction-details-page.reducer';
import { TRANSACTIONS_COLUMN_DATA, TRANSACTIONS_DETAILS_DATA, ON_TRANSACTION_CHANGE } from './transaction-details-page.actions';





@Component({
  selector: 'app-transaction-details-page',
  templateUrl: './transaction-details-page.component.html',
  styleUrls: ['./transaction-details-page.component.css'],
  providers: [TransactionDetailsService]
})
export class TransactionDetailsPageComponent implements OnInit {
  currentTransaction: any = {};
  showFullStatus = false;
  @select(s => s.transaction_detail.transactionDetailsData) transactionDetailsData;
  @select(s => s.settings.transacationColumnsData) transacationColumnsData;
  constructor(
    private route: ActivatedRoute,
    private service: TransactionDetailsService,
    private redux: NgRedux<ITransactionDetailsStates>

  ) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe(params => {
        const transactionId = params.get('transactionId');
        const userId = params.get('userId');
        //  Mapping the column names to transaction response
        this.service.getDisplayNamesForColumns().subscribe(response => {
          this.redux.dispatch({
            type: TRANSACTIONS_COLUMN_DATA,
            columnData: response
          });
          this.service.getTransactionDetails(transactionId, userId).subscribe(res => {
            this.redux.dispatch({
              type: TRANSACTIONS_DETAILS_DATA,
              detailData: res
            });
            this.redux.dispatch({
              type: ON_TRANSACTION_CHANGE,
              currentTransaction: res[0]
            });
          });
        });
      });
  }
}
