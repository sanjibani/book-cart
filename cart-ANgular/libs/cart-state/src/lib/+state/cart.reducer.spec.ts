import { initialState, reducer } from './cart.reducer';
import * as cartActions from './cart.actions';
import { product, productsData, productCollection } from '@cart-angular/mock-data';


describe ('Cart Reducer', () => {
    const cartProduct = product;
    const collectionProduct = productCollection;

    describe('undefined action', () => {
        it('should return the default state', () => {
          const action = { type: 'NOOP' } as any;
          const result = reducer(initialState, action);
    
          expect(result).toBe(initialState);
        });
      });

      describe('Add to Cart Action', () => {
        it('Should return the added product', () => {
          const action = new cartActions.AddtoCart(cartProduct);
          const result = reducer(initialState, action);
    
          expect(result).toEqual({
            ...initialState,
            cartList: initialState.cartList.concat(cartProduct),
            collectionList: []
          });
        });
      });

      describe('Remove from cart action', () => {
        it('Should return the product list after removing product', () => {
          const action = new cartActions.RemovefromCart(cartProduct);
          initialState.cartList.concat(productsData.items);
          const result = reducer(initialState, action);

          expect(result).toEqual({
            cartList: initialState.cartList.filter(cartList => cartList.id !== cartProduct.id),
            collectionList: []
          });
        });
      });

      describe(' Add to Collections', () => {
        it('Should return the added collection', () => {
          const action = new cartActions.AddtoCollections(collectionProduct);
          const result = reducer(initialState, action);

          expect(result).toEqual({
            ...initialState,
            cartList: [],
            collectionList: initialState.collectionList.concat(collectionProduct)
          });
        });
      });
})
