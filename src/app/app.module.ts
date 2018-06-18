import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
//Angular Material Modules
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDialogModule} from '@angular/material/dialog';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
//Components
import { AppComponent } from './app.component';
import { SettingsPageComponent } from './settings-page/settings-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SideNavigationComponent } from './side-navigation/side-navigation.component';
import { HomePageComponent } from './home-page/home-page.component';


import { HeaderComponent } from './header/header.component'

import { TableComponent } from './table/table.component';

import { DetailsModule } from './details/details.module';
import { TransactionsModule } from './transactions/transactions.module';
import { SideNavigationModule } from './side-navigation/side-navigation.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material'
import { MatTabsModule } from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { TransactionDetailsPageComponent } from './transaction-details-page/transaction-details-page.component';
import {TransactionDetailsService} from './services/transaction-details.service';
import { TransactionDetailsSummaryComponent } from './transaction-details-summary/transaction-details-summary.component';

import { HttpClientModule } from '@angular/common/http';
import { FilterDataPipe } from './common/filter-data.pipe';
import { TransactionDetailsStatusComponent } from './transaction-details-status/transaction-details-status.component';
import { TransactionDetailsSingleStatusComponent } from './transaction-details-single-status/transaction-details-single-status.component';

import { TransactionStatusDiagramComponent } from './transaction-status-diagram/transaction-status-diagram.component';
import { NgReduxModule, NgRedux } from '@angular-redux/store';
import { IAppState, INITIAL_STATE, rootReducer} from '../app/store';
//Services
import {SettingsHttpService} from "../services/settings-http.service";
import { DeleteDialogComponent } from './settings-page/delete-dialog/delete-dialog.component';



@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    SettingsPageComponent,
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
    DetailsModule,
    TransactionsModule,
    SideNavigationModule,
    ReactiveFormsModule,
    MatSelectModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatDialogModule,
    MatInputModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    RouterModule.forRoot([
    {
      path: 'home',
      component: HomePageComponent
    },
     {
      path: 'transactions',
      component: TableComponent
    },
    {
      path: 'transactionsDetails',
      component: TransactionDetailsPageComponent
    },
    {
      path: 'table',
      component: TableComponent
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
    ]),
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatTabsModule,
    MatIconModule,
    HttpClientModule,
    MatCheckboxModule,
    MatButtonModule
  ],
  providers: [TransactionDetailsService,SettingsHttpService],
  entryComponents: [DeleteDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>) {
    ngRedux.configureStore(rootReducer, INITIAL_STATE);
  }
 }
