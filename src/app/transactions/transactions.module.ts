import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgReduxModule } from '@angular-redux/store';
import { TransactionsPageComponent } from './transactions-page/transactions-page.component';

@NgModule({
  imports: [
    CommonModule,
    NgReduxModule
  ],
  declarations: [TransactionsPageComponent],
  exports: [TransactionsPageComponent]
})
export class TransactionsModule { }
