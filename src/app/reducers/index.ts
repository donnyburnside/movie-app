import { IAppState } from '../models/app';
import { IAppAction } from '../models/action';
import { FETCH_APP_META_DATA } from '../actions/app';

export function rootReducer(state: IAppState, action: IAppAction): IAppState {
  switch (action.type) {
    case FETCH_APP_META_DATA:
      return Object.assign({}, state, action.payload)
  }
  return state;
}
