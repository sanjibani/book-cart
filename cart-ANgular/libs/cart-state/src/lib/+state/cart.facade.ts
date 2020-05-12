import { Store, select } from '@ngrx/store';
import { Injectable } from '@angular/core';
import * as fromProduct from './cart.reducer';
import * as cartActions from './cart.actions';
import * as cartSelectors from './cart.selectors';

@Injectable({
    providedIn: 'root'
})
export class CartFacade {
    
    constructor(private store: Store<fromProduct.State>) {}

    cartProducts$ = this.store.pipe(select(cartSelectors.getCartList));
    collectionProducts$ = this.store.pipe(select(cartSelectors.getCollectionList));

    dispatchProductsToStore(productDetail) {
        this.store.dispatch(new cartActions.AddtoCart(productDetail));
    }

    removeFromCart(productDetail) {
        this.store.dispatch(new cartActions.RemovefromCart(productDetail));
    }

    dispatchProductsToCollection(purchasedProduct) {
        this.store.dispatch(new cartActions.AddtoCollections(purchasedProduct));
    }

   }