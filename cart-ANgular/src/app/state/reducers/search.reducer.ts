import { Product } from 'src/app/shared-module/models/product.model';
import * as fromRoot from '../../state/app.state';
import { SearchActions, SearchActionTypes } from '../actions/search.action';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface State extends fromRoot.State {
    products: ProductState;
}
export interface ProductState {
    searchString: string;
    productList: Product [];
    error: any;
}

const initialState: ProductState = {
    productList: [],
    searchString: '',
    error: null
};


const getSearchFeatureState = createFeatureSelector<ProductState>('products');

export const getSearchString = createSelector(
    getSearchFeatureState,
    state => state.searchString
);

export const getProductList = createSelector(
    getSearchFeatureState,
    state => state.productList
);

export const getErrorResponse = createSelector(
    getSearchFeatureState,
    state => state.error
);

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
