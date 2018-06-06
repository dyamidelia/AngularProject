import { tassign } from 'tassign'; 
import { ACTION1 } from './actions'; 

export interface ITransactionsState {
  newMessages: number;
}

export const TRANSACTIONS_INITIAL_STATE: ITransactionsState = { 
  newMessages: 0
}

function increment(state, action) {
  return tassign(state, { newMessages: state.newMessages + 1 });
}

export function transactionsReducer(state: ITransactionsState = TRANSACTIONS_INITIAL_STATE, action): ITransactionsState {
  switch (action.type) {
    case ACTION1: return increment(state, action);
  }

  return state; 
}