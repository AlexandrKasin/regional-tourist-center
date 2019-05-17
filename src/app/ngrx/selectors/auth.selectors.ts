import {createFeatureSelector, createSelector} from '@ngrx/store';
import {Token} from '@angular/compiler';

export const getAuthStore = (state: Token) => state;

export const getToken = createSelector(
  getAuthStore, (auth: Token) => auth
);
