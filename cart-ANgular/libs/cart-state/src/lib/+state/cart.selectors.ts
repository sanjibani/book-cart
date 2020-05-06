import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CartState } from '@cart-angular/cart-state';
import { AppConstants } from '@cart-angular/types';

const getCartFeatureState = createFeatureSelector<CartState>(AppConstants.CART_INFO);

export const getCartList = createSelector(
    getCartFeatureState,
    state => state.cartList
);

export const getCollectionList = createSelector(
    getCartFeatureState,
    state => state.collectionList
);