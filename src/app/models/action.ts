import { Action } from 'redux';

export interface IAppAction extends Action {
  type: string;
  payload?: any;
}
