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
    DeleteDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatDialogModule,
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
      component: NotFoundComponent
    },
    ])
  ],
  entryComponents: [DeleteDialogComponent],
  providers: [SettingsHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
