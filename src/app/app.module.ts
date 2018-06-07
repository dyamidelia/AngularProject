import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';

import { AppComponent } from './app.component';
import { IAppState, rootReducer, INITIAL_STATE} from './store'

import { TransactionsPageComponent } from './transactions/transactions-page/transactions-page.component';
import { DetailsPageComponent } from './details/details-page/details-page.component';
import { NavigationComponent } from './side-navigation/navigation/navigation.component';
import { TableComponent } from './table/table.component';

import { DetailsModule } from './details/details.module';
import { TransactionsModule } from './transactions/transactions.module';
import { SideNavigationModule } from './side-navigation/side-navigation.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material'
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
  ],
  imports: [
    BrowserModule,
    NgReduxModule,
    HttpModule,
    DetailsModule,
    TransactionsModule,
    SideNavigationModule,
    RouterModule.forRoot([
    {
      path: '', 
      component: TransactionsPageComponent
    },
    {
      path: 'details', 
      component: DetailsPageComponent
    },
    {
      path: 'transactions', 
      component: TransactionsPageComponent
    },
    {
      path: 'table', 
      component: TableComponent
    }
    ]),
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
    constructor(ngRedux: NgRedux<IAppState>) {
    ngRedux.configureStore(rootReducer, INITIAL_STATE);
  }

 }
