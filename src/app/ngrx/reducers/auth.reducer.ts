import {AuthActionTypes, AuthActions} from '../actions/auth.actions';
import {Token} from '@angular/compiler';

export const initialState = {
  token: {
    accessToken: '',
    username: '',
    roles: []
  }
};

export function authReducer(state = initialState, action: AuthActions) {
  switch (action.type) {
    case AuthActionTypes.SetAuthParams:
      return Object.assign(state, {token: action.token});

    default:
      return state;
  }
}
