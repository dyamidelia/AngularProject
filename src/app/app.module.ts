import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';

import { AppComponent } from './app.component';
import { IAppState, rootReducer, INITIAL_STATE} from './store'

import { TransactionsPageComponent } from './transactions/transactions-page/transactions-page.component';
import { DetailsPageComponent } from './details/details-page/details-page.component';


import { DetailsModule } from './details/details.module';
import { TransactionsModule } from './transactions/transactions.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NgReduxModule,
    HttpModule,
    DetailsModule,
    TransactionsModule,
    RouterModule.forRoot([
    {
      path: '', 
      component: TransactionsPageComponent
    },
    {
      path: 'details', 
      component: DetailsPageComponent
    }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
    constructor(ngRedux: NgRedux<IAppState>) {
    ngRedux.configureStore(rootReducer, INITIAL_STATE);
  }

 }
