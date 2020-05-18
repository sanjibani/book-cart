import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from '@cart-angular/shared';
import { HttpClientModule } from '@angular/common/http';
import { product } from '@cart-angular/mock-data';
import { AppService } from '../../../app.service';
import { CartMainComponent } from './cart-main.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import * as fromProduct from '@cart-angular/cart-state';
import { reducer } from '@cart-angular/cart-state';
import { By } from '@angular/platform-browser';
import { Subscription } from 'rxjs';

describe('CartComponent:', () => {
  let component: CartMainComponent;
  let fixture: ComponentFixture<CartMainComponent>;
  let store: MockStore<fromProduct.State>;
  let appService: AppService;
  const initialState = {
    cartInfo: {
      cartList: [],
      collectionList: []
    }
  } as fromProduct.State;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        SharedModule,
        StoreModule.forRoot({ feature: reducer })
      ],
      declarations: [CartMainComponent],
      providers: [provideMockStore({ initialState })]
    }).compileComponents();

    store = TestBed.inject(MockStore);
    appService = TestBed.inject(AppService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    appService = fixture.debugElement.injector.get(AppService);
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should show the product detail component hiding search-main', () => {
    component.viewProduct(product);

    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('.product-detail'))).toBeTruthy();
  });

  it('should open the Billing Page hiding search-main', () => {
    component.openBillPage(product);

    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('.billingPage'))).toBeTruthy();
  });

  it('should close all the child components showing search-main component', () => {
    component.closeProduct();

    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('.cart-main'))).toBeTruthy();
  });

  it('should show success message on removing item from cart', () => {
    component.removeProduct();

    fixture.detectChanges();
    expect(appService.messageSuccess).toBeTruthy();
  });

  it('should unsubscribe the subscription', () => {
    spyOn(Subscription.prototype, 'unsubscribe');
    component.ngOnDestroy();
    expect(Subscription.prototype.unsubscribe).toHaveBeenCalled();
  });
});
