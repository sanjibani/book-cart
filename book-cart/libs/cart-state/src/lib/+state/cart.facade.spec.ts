import { TestBed  } from '@angular/core/testing';
import { NgModule } from '@angular/core';

import { Store, StoreModule } from '@ngrx/store';
import { readFirst } from '@nrwl/nx/testing';
import { NxModule } from '@nrwl/nx';

import { CartFacade } from './cart.facade';
import { reducer, initialState } from './cart.reducer';
import { productsData, productCollection, product } from '@cart-angular/mock-data';
import * as fromProduct from '@cart-angular/cart-state';

describe('Cart Facade:', () => {
  let facade: CartFacade;
  let store: Store<fromProduct.State>;

  beforeEach( async () => {
    @NgModule({
      imports: [StoreModule.forFeature('cartInfo', reducer, { initialState })],
      providers: [CartFacade]
    })
    class CustomFeatureModule {}

    @NgModule({
      imports: [NxModule.forRoot(), StoreModule.forRoot({}), CustomFeatureModule]
    })
    class RootModule {}
    await TestBed.configureTestingModule({ imports: [RootModule] });

    store = TestBed.inject(Store);
    facade = TestBed.inject(CartFacade);
  });

  it('cartProducts$ should return empty list initially and not empty when dispatchProductsToStore is called', async done => {
    try {
      let list = await readFirst(facade.cartProducts$);

      expect(list.length).toBe(0); // initially empty

      facade.dispatchProductsToStore(productsData.items); // In our case loadAll() always returns an empty array.

      list = await readFirst(facade.cartProducts$);

      expect(list.length).toBe(10);

      done();
    } catch (err) {
      done.fail(err);
    }
  });

  it('cartProducts$ should return empty list, after removing the product', async done => {
    try {
      let list = await readFirst(facade.cartProducts$); // initial empty cart

      facade.dispatchProductsToStore(product); // adding item to cart

      facade.removeFromCart(product); // removing item from cart

      list = await readFirst(facade.cartProducts$);

      expect(list.length).toBe(0);

      done();
    } catch (err) {
      done.fail(err);
    }
  });

  it('collectionProducts$ should return empty list initially and not empty when dispatchProductsToCollection is called', async done => {
    try {
      let list = await readFirst(facade.collectionProducts$);

      expect(list.length).toBe(0);

      facade.dispatchProductsToCollection(productCollection);

      list = await readFirst(facade.collectionProducts$);

      expect(list.length).toBe(1);

      done();
    } catch (err) {
      done.fail(err);
    }
  });
});
