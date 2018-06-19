import {SettingsHttpService} from '../../app/services/settings-http.service';
import {INIT_STATE, INIT_STATUS} from './settings-page.actions';

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
    case INIT_STATE: return {...state, states: action.states};
    case INIT_STATUS: return {...state, statuses: action.statuses};
    default: return state;
  }

}
