import { tassign } from 'tassign'; 
import { combineReducers } from 'redux';
import { ITransactionsState, TRANSACTIONS_INITIAL_STATE, transactionsReducer } from './transactions-page/store';

export interface IAppState {
  transactions: ITransactionsState;
}

export const INITIAL_STATE: IAppState = { 
   transactions: TRANSACTIONS_INITIAL_STATE
}

export const rootReducer = combineReducers({
	transactions: transactionsReducer
});

