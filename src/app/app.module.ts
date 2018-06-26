//  Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { NgRedux } from '@angular-redux/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
//  Angular Material Modules
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
//  Components
import { AppComponent } from './app.component';
import { SettingsPageComponent } from './settings-page/settings-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SideNavigationComponent } from './side-navigation/side-navigation.component';
import { HomePageComponent } from './home-page/home-page.component';
import { TransactionsPageComponent } from './transactions/transactions-page.component';
// import { HeaderComponent } from './header/header.component';
//  import { TableComponent } from './table/table.component';
import { DetailsModule } from './details/details.module';
import { SideNavigationModule } from './side-navigation/side-navigation.module';
import { TransactionDetailsPageComponent } from './transaction-details-page/transaction-details-page.component';
import { TransactionDetailsSummaryComponent } from './transaction-details-summary/transaction-details-summary.component';
import { TransactionDetailsStatusComponent } from './transaction-details-status/transaction-details-status.component';
import { TransactionDetailsSingleStatusComponent } from './transaction-details-single-status/transaction-details-single-status.component';
import { TransactionStatusDiagramComponent } from './transaction-status-diagram/transaction-status-diagram.component';
import { IAppState, INITIAL_STATE, rootReducer } from '../app/reducer';
//  Pipes
import { FilterDataPipe } from './common/filter-data.pipe';
import { KeysPipe } from './common/keys.pipe';
// Services
import {SettingsHttpService} from '../app/services/settings-http.service';
import { DeleteDialogComponent } from './settings-page/delete-dialog/delete-dialog.component';
import {TransactionDetailsService} from './services/transaction-details.service';
import { OrderByPipe } from './common/order-by.pipe';



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
    TransactionDetailsStatusComponent,
    TransactionDetailsSingleStatusComponent,
    TransactionStatusDiagramComponent,
    DeleteDialogComponent,
    TransactionsPageComponent,
    KeysPipe,
    OrderByPipe
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
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    routing,
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
  providers: [TransactionDetailsService, SettingsHttpService],
  entryComponents: [DeleteDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>) {
    ngRedux.configureStore(rootReducer, INITIAL_STATE);
  }
}
