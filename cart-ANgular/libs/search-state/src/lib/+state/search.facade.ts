import { Injectable } from '@angular/core';

import { Store, select } from '@ngrx/store';

import * as fromProduct from './search.reducer';
import * as searchSelectors from './search.selectors';
import * as searchActions from './search.actions';

@Injectable({
  providedIn: 'root'
})
export class SearchFacade {
  constructor(private store: Store<fromProduct.State>) {}

  searchString$ = this.store.pipe(select(searchSelectors.getSearchString));
  productList$ = this.store.pipe(select(searchSelectors.getProductList));
  error$ = this.store.pipe(select(searchSelectors.getErrorResponse));

  loadProductstoStore(searchQuery) {
    this.dispatchSearchKeyToStore(searchQuery);
    this.store.dispatch(new searchActions.Load(searchQuery));
  }

  dispatchSearchKeyToStore(searchQuery) {
    this.store.dispatch(new searchActions.SearchQuery(searchQuery));
  }
}
