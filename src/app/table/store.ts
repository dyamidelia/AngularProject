import { tassign } from 'tassign'; 
import { GET_TRANSACTIONS_SUCCESS } from './actions'; 

export interface ITableState {
  todos: any[];
  users: any[];
  newMessages: number;
}

export const TABLE_INITIAL_STATE: ITableState = { 
  todos: [],
  users: [],
  newMessages: 0
}

function getColumns(state, action){

  return tassign(state, {
    users: action.users
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
    case GET_TRANSACTIONS_SUCCESS: return getTodo(state, action);
  }

  return state; 
}