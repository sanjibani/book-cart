import { Product } from '@cart-angular/types';
import * as fromRoot from '../../../../../apps/cart-angular/src/app/state/app.state';
import { ProductCollection } from '@cart-angular/types';
import { CartActions, CartActionTypes } from '@cart-angular/cart-state';

export interface CartState {
    cartList: Product [];
    collectionList: ProductCollection [];
}

export interface State extends fromRoot.State {
    cartInfo: CartState;
}

export const initialState: CartState = {
    cartList: [],
    collectionList: []
};

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
