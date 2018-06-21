import { tassign } from 'tassign';
import { combineReducers } from 'redux';
import { ITransactionsState, TRANSACTIONS_INITIAL_STATE, transactionsReducer } from './transactions/transactions-page.reducer';
import { IDetailsState, DETAILS_INITIAL_STATE, detailsReducer } from './details/store';
import { ISettingsState, SETTINGS_INITIAL_STATE, settingsReducer } from './settings-page/settings-page.reducer';

export interface IAppState {
  transactions: ITransactionsState;
  details: IDetailsState;
  settings: ISettingsState;
}

export const INITIAL_STATE: IAppState = {
   transactions: TRANSACTIONS_INITIAL_STATE,
   details: DETAILS_INITIAL_STATE,
   settings: SETTINGS_INITIAL_STATE
};

export const rootReducer = combineReducers<IAppState> ({
  transactions: transactionsReducer,
  details: detailsReducer,
  settings: settingsReducer
});
