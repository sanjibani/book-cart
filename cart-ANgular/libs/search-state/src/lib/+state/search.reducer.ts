import { Product } from '@cart-angular/types';
import * as fromRoot from '../../../../../apps/cart-angular/src/app/state/app.state';
import { SearchActions, SearchActionTypes } from '@cart-angular/search-state';

export interface State extends fromRoot.State {
    products: ProductState;
}
export interface ProductState {
    searchString: string;
    productList: Product [];
    error: any;
}

export const initialState: ProductState = {
    productList: [],
    searchString: '',
    error: null
};

export function reducer(state = initialState, action: SearchActions): ProductState {
    switch (action.type) {

        case SearchActionTypes.SearchQuery:
            return {
                ...state,
                searchString: action.payload
            };

        case SearchActionTypes.LoadSuccess:
            return {
                ...state,
                productList: action.payload,
                error: null
            };

        case SearchActionTypes.LoadFailure:
            return {
                ...state,
                productList: [],
                error: action.payload
            };

            default:
                return state;
    }

}
