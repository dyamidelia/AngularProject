import {SettingsHttpService} from '../../app/services/settings-http.service';
import {INIT_STATE, ADD_STATE, EDIT_STATE, DELETE_STATE,
        INIT_STATUS, ADD_STATUS, EDIT_STATUS, DELETE_STATUS} from './settings-page.actions';

export interface ISettingsState  {
  states: object[];
  statuses: object[];
}

export const SETTINGS_INITIAL_STATE: ISettingsState = {
  states: [],
  statuses: []
};

export function settingsReducer(state: ISettingsState = SETTINGS_INITIAL_STATE, action) {

  switch (action.type) {

    // States Block
    case INIT_STATE: return {...state, states: action.states};
    case ADD_STATE: return {...state, states: [...state.states, action.newState]};
    case EDIT_STATE: {
      const updatedStates = state.states.map((s: any) => {
          return (s.state_id === action.currentState.state_id) ? {...s, state_name: action.newStateName} : s;
        });
      return {...state, states: [...updatedStates]};
    }
    case DELETE_STATE: return {...state, states: [...state.states.filter((s: any) => s.state_id !== action.delStateId)]};

    // Statuses Block
    case INIT_STATUS: return {...state, statuses: action.statuses};
    case ADD_STATUS: return {...state, statuses: [...state.statuses, action.newStatus]};
    case EDIT_STATUS: {
      const updatedStatuses = state.statuses.map((status: any) => {
          return (status.status_id === action.currentStatus.status_id) ? {...status, status_name: action.newStatusName} : status;
        });
      return {...state, statuses: [...updatedStatuses]};
    }
    case DELETE_STATUS: return {...state, statuses: [...state.statuses.filter((status: any) => status.status_id !== action.delStatusId)]};
    default: return state;
  }

}
