import { TestBed,  ComponentFixture } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';

import { StoreModule } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Subscription } from 'rxjs';

import * as fromProduct from '@cart-angular/cart-state';
import { reducer } from '@cart-angular/search-state';
import { CollectionMainComponent } from './collection-main.component';

describe('Collection Component:', () => {
  let component: CollectionMainComponent;
  let fixture: ComponentFixture<CollectionMainComponent>;
  let store: MockStore<fromProduct.State>;
  const initialState = {
    cartInfo: {
      cartList: [],
      collectionList: []
    }
  } as fromProduct.State;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatCardModule, StoreModule.forRoot({ feature: reducer })],
      declarations: [CollectionMainComponent],
      providers: [provideMockStore({ initialState })]
    }).compileComponents();

    store = TestBed.inject(MockStore);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should unsubscribe the subscription', () => {
    spyOn(Subscription.prototype, 'unsubscribe');
    component.ngOnDestroy();
    expect(Subscription.prototype.unsubscribe).toHaveBeenCalled();
  });
});
