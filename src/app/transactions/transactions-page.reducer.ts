import { tassign } from 'tassign'; 
import { GET_TRANSACTIONS_SUCCESS, HIDE_COLUMN, SHOW_HIDDEN_COLUMN, POST_TRANSACTIONS_SUCCESS, GET_COlUMNS_SUCCESS, SAVE_COlUMNS_SUCCESS} from './transactions-page.actions'; 

export interface ITransactionsState {
  transactions: any[];
  columns: any[];
}

export const TRANSACTIONS_INITIAL_STATE: ITransactionsState = {
  transactions: [],
  columns: []
};

function getColumns(state, action) {
  return tassign(state, { columns: action.columns });
}

function getTransactions(state, action) {
  return tassign(state, { transactions: action.transactions });
}


function addColumn(state, action) {

  const columns2 = state.columns.filter((col) => {
    return col.display_name !== action.column.display_name;
  });
  const columns = [...columns2, action.column];
  return tassign(state, { columns });

}

function hideColumn(state, action) {

  let columns2 = state.columns.filter((col)=>{
    return col.display_name != action.column.display_name;
  });

  let columns = [...columns2,action.column];
  return tassign(state, { columns });

}

function saveColumns(state, action){
  console.log("WE did it bois");
  return tassign(state, { state });
}


export function transactionsReducer(state: ITransactionsState = TRANSACTIONS_INITIAL_STATE, action): ITransactionsState {
  switch (action.type) {
    case GET_TRANSACTIONS_SUCCESS: return getTransactions(state, action);
    case SHOW_HIDDEN_COLUMN: return addColumn(state, action);
    case GET_COlUMNS_SUCCESS: return getColumns(state, action);
    case HIDE_COLUMN: return hideColumn(state, action);
    case SAVE_COlUMNS_SUCCESS: return saveColumns(state, action);
  }

  return state;
}
