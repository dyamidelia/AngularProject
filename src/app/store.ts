import { tassign } from 'tassign'; 
import { combineReducers } from 'redux';
import { ITransactionsState, TRANSACTIONS_INITIAL_STATE, transactionsReducer } from './transactions/store';
import { IDetailsState, DETAILS_INITIAL_STATE, detailsReducer } from './details/store';
import { ITableState, TABLE_INITIAL_STATE, tableReducer} from './table/store';

export interface IAppState {
  transactions: ITransactionsState;
  details: IDetailsState;
  table: ITableState;
}

export const INITIAL_STATE: IAppState = { 
   transactions: TRANSACTIONS_INITIAL_STATE,
   details: DETAILS_INITIAL_STATE,
   table: TABLE_INITIAL_STATE
}

export const rootReducer = combineReducers({
	transactions: transactionsReducer,
  details: detailsReducer,
  table: tableReducer
});

