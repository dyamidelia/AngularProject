import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from "@angular/forms";
//Angular Material Modules
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDialogModule} from '@angular/material/dialog';
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

//Services
import {SettingsHttpService} from "../services/settings-http.service";
import { DeleteDialogComponent } from './settings-page/delete-dialog/delete-dialog.component';



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
    TransactionStatusDiagramComponent,
    DeleteDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,

    HttpClientModule,

    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatDialogModule,
    RouterModule.forRoot([
    {
      path: 'home',
      component: HomePageComponent
    },
     {
      path: 'transactions',
      component: TransactionsPageComponent
    },
    {
      path: 'transactionsDetails',
      component: TransactionDetailsPageComponent
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
        path: '',
        redirectTo: '/home',
        pathMatch:"full"
      },
    {
      path: '**',
      component: NotFoundComponent
    }
    ])
  ],
  providers: [TransactionDetailsService,SettingsHttpService],
  entryComponents: [DeleteDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
