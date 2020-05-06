import * as searchActions from './search.actions';
import { initialState, reducer } from './search.reducer';
import { productsData, errorData } from '@cart-angular/mock-data';

describe ('Search Reducer', () => {
    const searchQuery = 'angular';
    const products = productsData;
    const error = errorData;

    describe('undefined action', () => {
        it('should return the default state', () => {
          const action = { type: 'NOOP' } as any;
          const result = reducer(initialState, action);
    
          expect(result).toBe(initialState);
        });
      });

      describe('Search Query Action', () => {
        it('Add Search Query', () => {
          const action = new searchActions.SearchQuery(searchQuery);
          const result = reducer(initialState, action);
    
          expect(result).toEqual({
            ...initialState,
            productList: [],
            searchString: searchQuery,
            error: null
          });
        });
      });

      describe('Load Success Action', () => {
        it('Should load product list to the state', () => {
          const action = new searchActions.LoadSuccess(products.items)
          const result = reducer(initialState, action);
    
          expect(result).toEqual({
            ...initialState,
            productList: products.items,
            searchString: '',
            error: null
          });
        });
      });

      describe('Load Failure Action', () => {
        it('Should update error in the state', () => {
          const action = new searchActions.LoadFailure(error);
          const result = reducer(initialState, action);
    
          expect(result).toEqual({
            ...initialState,
            productList: [],
            searchString: '',
            error: error
          });
        });
      });
})
