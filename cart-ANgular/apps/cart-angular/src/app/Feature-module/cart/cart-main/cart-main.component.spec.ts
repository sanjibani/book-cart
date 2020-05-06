import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { Store, ReducerManagerDispatcher, ReducerManager, StoreModule } from '@ngrx/store';
import * as mock from '@cart-angular/mock-data';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from '@cart-angular/shared';
import { HttpClientModule } from '@angular/common/http';
import { product } from '@cart-angular/mock-data';
import { By } from '@angular/platform-browser';
import { AppService } from '../../../app.service';
import { of } from 'rxjs';
import { CartMainComponent } from './cart-main.component';


const storeMock = {
    select() {
      return of({ cartList: [] });
    }
  };
  

describe('CartComponent:', () => {
  let component: CartMainComponent;
  let fixture: ComponentFixture<CartMainComponent>;
  let appService: AppService;
  const mockData = mock.productsData.items;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule,
        HttpClientModule, SharedModule, StoreModule.forRoot({})],
      declarations: [
        CartMainComponent
      ],
      providers: [AppService,  ReducerManager, ReducerManagerDispatcher,
        { 
            provide: Store,
            useValue: storeMock
          }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartMainComponent);
    component = fixture.debugElement.componentInstance;
    appService = fixture.debugElement.injector.get(AppService);
  });


  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

//   it('should show the product detail component hiding search-main', () => {
//     component.viewProduct(product);

//     fixture.detectChanges();
//     expect(fixture.debugElement.query(By.css('.product-detail'))).toBeTruthy();
//   });

//   it('should open the Billing Page hiding search-main', () => {
//     component.openBillPage(product);

//     fixture.detectChanges();
//     expect(fixture.debugElement.query(By.css('.billingPage'))).toBeTruthy();
//   });

//   it('should close all the child components showing search-main component', () => {
//     component.closeProduct();

//     fixture.detectChanges();
//     expect(fixture.debugElement.query(By.css('.cart-main'))).toBeTruthy();
//   });

});