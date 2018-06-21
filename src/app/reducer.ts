import { tassign } from 'tassign';
import { combineReducers } from 'redux';
import { ITransactionsState, TRANSACTIONS_INITIAL_STATE, transactionsReducer } from './transactions/transactions-page.reducer';
import { IDetailsState, DETAILS_INITIAL_STATE, detailsReducer } from './details/store';
import { ISettingsState, SETTINGS_INITIAL_STATE, settingsReducer } from './settings-page/settings-page.reducer';
import {ITransacationDetailsStates, TRANSACTION_DETIALS_INITIAL_STATE, transactionDetailsReducer } from './transaction-details-page/transaction-details-page.reducer';

export interface IAppState {
  transactions: ITransactionsState;
  details: IDetailsState;
  settings: ISettingsState;
  transaction_detail :ITransacationDetailsStates;
}

export const INITIAL_STATE: IAppState = {
   transactions: TRANSACTIONS_INITIAL_STATE,
   details: DETAILS_INITIAL_STATE,
   settings: SETTINGS_INITIAL_STATE,
   transaction_detail: TRANSACTION_DETIALS_INITIAL_STATE
};

export const rootReducer = combineReducers<IAppState> ({
  transactions: transactionsReducer,
  details: detailsReducer,
  settings: settingsReducer,
  transaction_detail: transactionDetailsReducer
});
