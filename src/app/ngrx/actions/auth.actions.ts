import {Action} from '@ngrx/store';
import {Token} from '../../models/token';

export enum AuthActionTypes {
  SetAuthParams = '[Auth] SetAuthParams',
}

export class SetAuthParams implements Action {
  readonly type = AuthActionTypes.SetAuthParams;

  constructor(public token: Token) {
  }
}

export type AuthActions =
  | SetAuthParams;
