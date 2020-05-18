import { createFeatureSelector, createSelector } from '@ngrx/store';

import { ProductState } from '@cart-angular/search-state';
import { AppConstants } from '@cart-angular/types';

const getSearchFeatureState = createFeatureSelector<ProductState>(AppConstants.PRODUCTS);

export const getSearchString = createSelector(getSearchFeatureState, state => state.searchString);

export const getProductList = createSelector(getSearchFeatureState, state => state.productList);

export const getErrorResponse = createSelector(getSearchFeatureState, state => state.error);
