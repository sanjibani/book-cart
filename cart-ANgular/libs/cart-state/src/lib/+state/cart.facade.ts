import { Store, select } from '@ngrx/store';
import { Injectable } from '@angular/core';
import * as fromProduct from '@cart-angular/cart-state';
import * as cartActions from '@cart-angular/cart-state';

@Injectable({
    providedIn: 'root'
})
export class CartFacade {
    
    constructor(private store: Store<fromProduct.State>) {}

    cartProducts$ = this.store.pipe(select(fromProduct.getCartList));
    collectionProducts$ = this.store.pipe(select(fromProduct.getCollectionList));

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