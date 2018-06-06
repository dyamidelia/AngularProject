import { tassign } from 'tassign'; 
import { GET_TRANSACTIONS_SUCCESS, POST_TRANSACTIONS_SUCCESS } from './actions'; 

export interface ITransactionsState {
  todos: any[];
  newMessages: number;
}

export const TRANSACTIONS_INITIAL_STATE: ITransactionsState = { 
  todos: [],
  newMessages: 0
}

function getTodo(state, action) {

  return tassign(state, {
    todos: action.todos
  });
}

function addTodo(state, action) {
  var newTodo = { id: state.todos.length + 1, title: action.title };

  return tassign(state, {
    todos: state.todos.concat(newTodo),
    lastUpdate: new Date()
  });
}

export function transactionsReducer(state: ITransactionsState = TRANSACTIONS_INITIAL_STATE, action): ITransactionsState {
  switch (action.type) {
    case GET_TRANSACTIONS_SUCCESS: return getTodo(state, action);
    case POST_TRANSACTIONS_SUCCESS: return addTodo(state, action);
  }

  return state; 
}