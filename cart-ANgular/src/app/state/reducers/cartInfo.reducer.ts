import { Product } from 'src/app/shared-module/models/product.model';
import * as fromRoot from '../../state/app.state';
import { ProductCollection } from 'src/app/shared-module/models/collection-detail.model';
import { CartActions, CartActionTypes } from '../actions/cartInfo.action';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface CartState {
    cartList: Product [];
    collectionList: ProductCollection [];
}

export interface State extends fromRoot.State {
    cartInfo: CartState;
}

const initialState: CartState = {
    cartList: [],
    collectionList: []
};

const getCartFeatureState = createFeatureSelector<CartState>('cartInfo');

export const getCartList = createSelector(
    getCartFeatureState,
    state => state.cartList
);

export const getCollectionList = createSelector(
    getCartFeatureState,
    state => state.collectionList
);

export function reducer(state = initialState, action: CartActions): CartState {
    switch (action.type) {
        case CartActionTypes.AddtoCart:
            return {
                ...state,
                cartList: state.cartList.concat(action.payload)
            };
        case CartActionTypes.RemovefromCart:
            return {
                ...state,
                cartList: state.cartList.filter(cartList => cartList.id !== action.payload.id)
            };
        case CartActionTypes.AddtoCollections:
            return {
                ...state,
                collectionList: state.collectionList.concat(action.payload)
            };
            default:
                return state;
    }

}
