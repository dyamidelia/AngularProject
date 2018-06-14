import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from "@angular/forms";

//Components
import { AppComponent } from './app.component';
import { SettingsPageComponent } from './settings-page/settings-page.component';
import { TransactionsPageComponent } from './transactions-page/transactions-page.component';
import { DetailsPageComponent } from './details-page/details-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SideNavigationComponent } from './side-navigation/side-navigation.component';
import { HomePageComponent } from './home-page/home-page.component';

import { HeaderComponent } from './header/header.component'

import { TransactionDetailsPageComponent } from './transaction-details-page/transaction-details-page.component';
import {TransactionDetailsService} from './services/transaction-details.service';
import { TransactionDetailsSummaryComponent } from './transaction-details-summary/transaction-details-summary.component';

import { HttpClientModule } from '@angular/common/http';
import { FilterDataPipe } from './common/filter-data.pipe';
import { TransactionDetailsStatusComponent } from './transaction-details-status/transaction-details-status.component';
import { TransactionDetailsSingleStatusComponent } from './transaction-details-single-status/transaction-details-single-status.component';

import { TransactionStatusDiagramComponent } from './transaction-status-diagram/transaction-status-diagram.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//Services
import {SettingsHttpService} from "../services/settings-http.service";



@NgModule({
  declarations: [
    AppComponent,
    SettingsPageComponent,
    TransactionsPageComponent,
    DetailsPageComponent,
    NotFoundComponent,
    SideNavigationComponent,
    HomePageComponent,
    TransactionDetailsPageComponent,
    TransactionDetailsSummaryComponent,
    FilterDataPipe,
    HeaderComponent,
    TransactionDetailsStatusComponent,
    TransactionDetailsSingleStatusComponent,
    TransactionStatusDiagramComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,

    HttpClientModule,

    ReactiveFormsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
    {
      path: '',
      component: HomePageComponent
    },
     {
      path: 'transactions',
      component: TransactionsPageComponent
    },
    {
      path: 'details/:transactionid',
      component: DetailsPageComponent
    },
    {

      path: 'transactions/:transactionId/user-trans-id/:userId', 
      component: TransactionDetailsPageComponent
    },
    {
      path: 'settings', 
      component: SettingsPageComponent
    },
    {
      path: '**',
      component: NotFoundComponent
    },
    ])
  ],

  providers: [TransactionDetailsService,SettingsHttpService],

  bootstrap: [AppComponent]
})
export class AppModule { }
