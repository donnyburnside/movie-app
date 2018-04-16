import { IAppState } from '../models/app.model';
import { IAppAction } from '../models/action.model';
import { FETCH_APP_META_DATA } from '../actions/app.actions';
import { FETCH_MOVIES } from '../actions/movies.actions';
import { FETCH_GENRES } from '../actions/genres.actions';

export function rootReducer(state: IAppState, action: IAppAction): IAppState {
  switch (action.type) {
    case FETCH_APP_META_DATA:
      return Object.assign({}, state, action.payload)

    case FETCH_GENRES:
      return Object.assign({}, state, action.payload)

    case FETCH_MOVIES:
      return Object.assign({}, state, action.payload)
  }
  return state;
}
