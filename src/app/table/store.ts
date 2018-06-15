import { tassign } from 'tassign'; 
import { GET_TRANSACTIONS_SUCCESS, GET_COLUMNS_SUCCESS } from './actions'; 

export interface ITableState {
  todos: any[];
  users: any[];
  transactions: any[];
  newMessages: number;
}

export const TABLE_INITIAL_STATE: ITableState = { 
  todos: [],
  users: [],
  transactions: [],
  newMessages: 0
}

function getColumns(state, action){

  return tassign(state, {
    todos: action.todos
  });
}

function getTransactions(state, action) {
  return tassign(state, {
    transactions: action.transactions
  });
}

function getTodo(state, action) {

  return tassign(state, {
    todos: action.todos
  });
}

function addTodo(state, action) {
}

export function tableReducer(state: ITableState = TABLE_INITIAL_STATE, action): ITableState {
  switch (action.type) {
    case GET_TRANSACTIONS_SUCCESS: return getTransactions(state, action);
    case GET_COLUMNS_SUCCESS: return getColumns(state, action);
  }

  return state; 
}