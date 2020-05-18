import { TestBed, async } from '@angular/core/testing';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { Store, StoreModule } from '@ngrx/store';
import { readFirst } from '@nrwl/nx/testing';
import { EffectsModule } from '@ngrx/effects';
import { NxModule } from '@nrwl/nx';

import { reducer, initialState } from '@cart-angular/search-state';
import * as fromProduct from '@cart-angular/search-state';
import { SearchFacade } from './search.facade';
import { SearchEffects } from './search.effects';

describe('Search Facade:', () => {
  let facade: SearchFacade;
  let store: Store<fromProduct.State>;

  beforeEach(async(() => {
    @NgModule({
      imports: [
        StoreModule.forFeature('products', reducer, { initialState }),
        EffectsModule.forFeature([SearchEffects]),
        HttpClientModule
      ],
      providers: [SearchFacade, SearchEffects]
    })
    class CustomFeatureModule {}

    @NgModule({
      imports: [NxModule.forRoot(), StoreModule.forRoot({}), EffectsModule.forRoot([]), CustomFeatureModule]
    })
    class RootModule {}
    TestBed.configureTestingModule({ imports: [RootModule] });

    store = TestBed.inject(Store);
    facade = TestBed.inject(SearchFacade);
  }));

  it('searchString$ should return empty initially', async done => {
    try {
      let search = await readFirst(facade.searchString$);

      expect(search).toBe(''); // initially empty

      facade.dispatchSearchKeyToStore('angular'); // dispatching action

      search = await readFirst(facade.searchString$);

      expect(search).toBe('angular');

      done();
    } catch (err) {
      done.fail(err);
    }
  });

  it('productList$ should return with list when searched with non empty string', async done => {
    try {
      let productList = await readFirst(facade.productList$);
      expect(productList.length).toBe(0); // initially empty

      facade.loadProductstoStore('angular'); // dispatching search api

      productList = await readFirst(facade.productList$);

      done();
    } catch (err) {
      done.fail(err);
    }
  });

  it('productList$ should return with empty list and error object when searched with empty string', async done => {
    try {
      const search = await readFirst(facade.searchString$);

      facade.dispatchSearchKeyToStore(search);

      const productList = await readFirst(facade.productList$);
      const error = await readFirst(facade.error$);

      expect(productList.length).toBe(0);

      done();
    } catch (err) {
      done.fail(err);
    }
  });
});
