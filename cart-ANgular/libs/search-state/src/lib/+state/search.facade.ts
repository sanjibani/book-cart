import { Store, select } from '@ngrx/store';
import * as fromProduct from '@cart-angular/search-state';
import { Injectable } from '@angular/core';
import * as searchActions from '@cart-angular/search-state';

@Injectable({
    providedIn: 'root'
})
export class SearchFacade {
    
    constructor(private store: Store<fromProduct.State>) {}

    searchString$ = this.store.pipe(select(fromProduct.getSearchString));
    productList$ = this.store.pipe(select(fromProduct.getProductList));
    error$ = this.store.pipe(select(fromProduct.getErrorResponse));

    loadProductstoStore(searchQuery) {
        this.dispatchSearchKeyToStore(searchQuery);
        this.store.dispatch(new searchActions.Load(searchQuery));
    }

    dispatchSearchKeyToStore(searchQuery) {
        this.store.dispatch(new searchActions.SearchQuery(searchQuery));
    }

   }