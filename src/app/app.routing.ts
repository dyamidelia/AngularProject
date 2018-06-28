import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HomePageComponent } from './home-page/home-page.component';
import { TransactionsPageComponent } from './transactions/transactions-page.component';
import { TransactionDetailsPageComponent } from './transaction-details-page/transaction-details-page.component';
import { SettingsPageComponent } from './settings-page/settings-page.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
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
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
