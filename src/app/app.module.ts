import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
<<<<<<< Updated upstream
=======
import {HttpModule} from '@angular/http';
>>>>>>> Stashed changes

import { AppComponent } from './app.component';
import { SettingsPageComponent } from './settings-page/settings-page.component';
import { TransactionsPageComponent } from './transactions-page/transactions-page.component';
import { DetailsPageComponent } from './details-page/details-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SideNavigationComponent } from './side-navigation/side-navigation.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
<<<<<<< Updated upstream
=======

//Services
import {SettingsHttpService} from "../services/settings-http.service";
>>>>>>> Stashed changes

@NgModule({
  declarations: [
    AppComponent,
    SettingsPageComponent,
    TransactionsPageComponent,
    DetailsPageComponent,
    NotFoundComponent,
    SideNavigationComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
<<<<<<< Updated upstream
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
      path: 'settings', 
      component: SettingsPageComponent
    },
    {
      path: '**', 
=======
    HttpModule,
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
      path: 'settings',
      component: SettingsPageComponent
    },
    {
      path: '**',
>>>>>>> Stashed changes
      component: NotFoundComponent
    },
    ])
  ],
  providers: [SettingsHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
