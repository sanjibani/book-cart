import { TestBed, async } from '@angular/core/testing';
import { AppService } from '../../../../../apps/cart-angular/src/app/app.service';

import { Observable } from 'rxjs';

import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot, cold } from '@nrwl/angular/testing';

import { SearchEffects } from './search.effects';
import * as searchActions from './search.actions';
import { productsData, errorData } from '@cart-angular/mock-data';
import { HttpClientModule } from '@angular/common/http';

describe('SearchEffects', () => {
  let actions: Observable<any>;
  let effects: SearchEffects;
  let appService: AppService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot(), HttpClientModule],
      providers: [
        SearchEffects,
        DataPersistence,
        AppService,
        provideMockActions(() => actions),
        provideMockStore()
      ]
    });

    effects = TestBed.inject(SearchEffects);
    appService = TestBed.inject(AppService);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('Load Products', () => {
    it('should return a Success action, with the product, on success', () => {
    const searchString = 'angular'; 
    const action = new searchActions.Load(searchString);
    const outcome = new searchActions.LoadSuccess(productsData.items);

    actions = hot('-a', { a: action });
    const response = cold('-a|', { a: productsData });
    const expected = cold('--b', { b: outcome });
    appService.getProducts = jest.fn(() => response);

    expect(effects.loadProducts$).toBeObservable(expected);
    });


    it('should return a Failure action, with an error, on failure', () => {
        const searchString = '';
        const action = new searchActions.Load(searchString);
        const outcome = new searchActions.LoadFailure(errorData);
  
        actions = hot('-a', { a: action });
        const response = cold('-#|', {}, errorData);
        const expected = cold('--b', { b: outcome });
        appService.getProducts = jest.fn(() => response);
  
        expect(effects.loadProducts$).toBeObservable(expected);
      });
  });
});


