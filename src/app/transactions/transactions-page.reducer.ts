import { tassign } from 'tassign';
import { GET_TRANSACTIONS_SUCCESS, POST_TRANSACTIONS_SUCCESS, GET_COlUMNS_SUCCESS } from './transactions-page.actions';

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


function addTodo(state, action) {
  const newTodo = { id: state.todos.length + 1, title: action.title };

  return tassign(state, {
    todos: state.todos.concat(newTodo),
    lastUpdate: new Date()
  });
}

export function transactionsReducer(state: ITransactionsState = TRANSACTIONS_INITIAL_STATE, action): ITransactionsState {
  switch (action.type) {
    case GET_TRANSACTIONS_SUCCESS: return getTransactions(state, action);
    case POST_TRANSACTIONS_SUCCESS: return addTodo(state, action);
    case GET_COlUMNS_SUCCESS: return getColumns(state, action);
  }

  return state;
}
