import { tassign } from 'tassign';
import { ACTION1 } from './actions';

export interface IDetailsState {
  newMessages: number;
}

export const DETAILS_INITIAL_STATE: IDetailsState = {
  newMessages: 0
};

function increment(state, action) {
  return tassign(state, { newMessages: state.newMessages + 1 });
}

function decrement(state, action) {
  return tassign(state, { newMessages: state.newMessages - 1 });
}

export function detailsReducer(state: IDetailsState = DETAILS_INITIAL_STATE, action): IDetailsState {
  switch (action.type) {
    case ACTION1: return increment(state, action);
  }

  return state;
}
