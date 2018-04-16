import { Action } from 'redux';

import { IAppState } from '../models/app';
import { FETCH_APP_META_DATA } from '../actions/app';

export function rootReducer(state: IAppState, action: Action): IAppState {
  switch (action.type) {
      case FETCH_APP_META_DATA:
        return Object.assign({}, state, {
          title: 'MoviezzZ',
          description: 'Lorem ipsum dolar',
          version: '0.0.0'
        })
    }
    return state;
}
