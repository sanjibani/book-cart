import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { SearchMainComponent } from './search-main.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from '@cart-angular/shared';
import { HttpClientModule } from '@angular/common/http';
import { AppService } from '../../../../app.service';
import * as fromProduct from '@cart-angular/search-state';
import { product } from '@cart-angular/mock-data';
import { By } from '@angular/platform-browser';
import { reducer } from '@cart-angular/search-state';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

describe('SearchComponent:', () => {
  let component: SearchMainComponent;
  let fixture: ComponentFixture<SearchMainComponent>;
  let store: MockStore<fromProduct.State>;
  const initialState = {
    products: {
      productList: [],
      searchString: '',
      error: null
    }
  } as fromProduct.State
  let appService: AppService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule,
        HttpClientModule, SharedModule,
        StoreModule.forRoot({ feature: reducer })
      ],
      declarations: [
        SearchMainComponent
      ],
      providers: [ provideMockStore({ initialState })]
    }).compileComponents();

    appService = TestBed.inject(AppService);
    store = TestBed.inject(MockStore);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchMainComponent);
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
    expect(fixture.debugElement.query(By.css('.search-main'))).toBeTruthy();
  });

  it('should show the success message for only 2 seconds', () => {
    component.addsuccess();

    fixture.detectChanges();
    expect(appService.messageSuccess).toBeTruthy();
  })
});