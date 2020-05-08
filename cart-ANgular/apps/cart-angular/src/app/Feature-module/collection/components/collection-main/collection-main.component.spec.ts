import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import * as fromProduct from '@cart-angular/cart-state';
import { reducer } from '@cart-angular/search-state';
import { CollectionMainComponent } from './collection-main.component';
import { MatCardModule } from '@angular/material/card';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Subscription } from 'rxjs';

describe('Collection Component:', () => {
  let component: CollectionMainComponent;
  let fixture: ComponentFixture<CollectionMainComponent>;
  let store: MockStore<fromProduct.State>
  const initialState = {
    cartInfo: {
      cartList: [],
      collectionList: []
    }
  } as fromProduct.State

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatCardModule,
        StoreModule.forRoot({ feature: reducer })],
      declarations: [
        CollectionMainComponent
      ],
      providers: [provideMockStore({ initialState })]
    }).compileComponents();

    store = TestBed.inject(MockStore);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should unsubscribe the subscription', () => {
    component.collectionSubscription$ = new Subscription();

    spyOn(component.collectionSubscription$, 'unsubscribe');
    component.ngOnDestroy();
    
    expect(component.collectionSubscription$.unsubscribe).toHaveBeenCalled();
  })

});
