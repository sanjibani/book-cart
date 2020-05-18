import { Action } from '@ngrx/store';

import { Product } from '@cart-angular/types';

export enum SearchActionTypes {
  SearchQuery = 'SEARCH_STRING',
  Load = 'LOAD',
  LoadSuccess = 'LOAD_SUCCESS',
  LoadFailure = 'LOAD_FAILURE'
}

export class SearchQuery implements Action {
  readonly type = SearchActionTypes.SearchQuery;

  constructor(public payload: string) {}
}

export class Load implements Action {
  readonly type = SearchActionTypes.Load;

  constructor(public payload: string) {}
}

export class LoadSuccess implements Action {
  readonly type = SearchActionTypes.LoadSuccess;

  constructor(public payload: Product[]) {}
}

export class LoadFailure implements Action {
  readonly type = SearchActionTypes.LoadFailure;

  constructor(public payload: any) {}
}

export type SearchActions = SearchQuery | Load | LoadSuccess | LoadFailure;
