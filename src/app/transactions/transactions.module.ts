import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgReduxModule } from '@angular-redux/store';
import { TransactionsPageComponent } from './transactions-page/transactions-page.component';
import { TransactionsService } from './services/transactions.service';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    NgReduxModule,
    MatButtonModule, 
    MatCheckboxModule
  ],
  declarations: [
    TransactionsPageComponent
  ],
  exports: [
    TransactionsPageComponent
  ],
  providers: [
    TransactionsService
  ]
})
export class TransactionsModule { }
