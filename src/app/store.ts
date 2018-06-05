import { tassign } from 'tassign'; 
import { ACTION1 } from './actions'; 

export interface IAppState {
  counter: number;
}

export const INITIAL_STATE: IAppState = { 
  counter: 0
}

export function rootReducer(state: IAppState, action): IAppState {
  switch (action.type) {
    case ACTION1: 

      //return tassign(state, { counter: state.counter +1,});
      return { counter: state.counter + 1};
  }

  return state; 
}