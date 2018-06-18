import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
//Angular Material Modules
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDialogModule} from '@angular/material/dialog';
//Components
import { AppComponent } from './app.component';
import { SettingsPageComponent } from './settings-page/settings-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SideNavigationComponent } from './side-navigation/side-navigation.component';
import { HomePageComponent } from './home-page/home-page.component';
import {TransactionsPageComponent} from './transactions/transactions-page.component'


import { HeaderComponent } from './header/header.component'
import { NavigationComponent } from './side-navigation/navigation/navigation.component';

import { DetailsModule } from './details/details.module';
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
import { IAppState, INITIAL_STATE, rootReducer} from '../app/reducer';
//Services
import {SettingsHttpService} from "../services/settings-http.service";
import { DeleteDialogComponent } from './settings-page/delete-dialog/delete-dialog.component';



@NgModule({
  declarations: [
    AppComponent,
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
    DeleteDialogComponent,
    TransactionsPageComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    DetailsModule,
    SideNavigationModule,
    ReactiveFormsModule,
    MatSelectModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatDialogModule,
    MatInputModule,
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
