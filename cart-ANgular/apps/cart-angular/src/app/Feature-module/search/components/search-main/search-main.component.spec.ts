import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { Store, StoreModule, ReducerManager, ReducerManagerDispatcher } from '@ngrx/store';
import { SearchMainComponent } from './search-main.component';
import * as mock from '@cart-angular/mock-data';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from '@cart-angular/shared';
import { HttpClientModule } from '@angular/common/http';
import { AppService } from '../../../../app.service';
import * as searchActions from '@cart-angular/search-state';
import * as fromProduct from '@cart-angular/search-state';
import { product, errorData } from '@cart-angular/mock-data';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { reducer } from '@cart-angular/search-state';


const storeMock = {  
  select() {
    return of({
    });
}
};

describe('SearchComponent:', () => {
  let component: SearchMainComponent;
  let fixture: ComponentFixture<SearchMainComponent>;
  let store: Store;
  let appService: AppService;
  const mockData = mock.productsData.items;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule,
        HttpClientModule, SharedModule,
        StoreModule.forRoot({ feature: reducer })],
        // StoreModule.forRoot({ feature: reducer })],
      declarations: [
        SearchMainComponent
      ],
      providers: [AppService, ReducerManager, ReducerManagerDispatcher]
    }).compileComponents();
  
    store = TestBed.inject(Store);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchMainComponent);
    component = fixture.debugElement.componentInstance;
    appService = fixture.debugElement.injector.get(AppService);
  });


  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  // it('should display search', async(() => {
  //   store.dispatch(new searchActions.LoadSuccess(mock.productsData.items));

  //   // const input = fixture.debugElement.query(By.css('searchTerm')).context;
  //   expect(component.products).toBe(mock.productsData.items);
  // }));

  // it('should show the product detail component hiding search-main', () => {
  //   component.viewProduct(product);

  //   fixture.detectChanges();
  //   expect(fixture.debugElement.query(By.css('.product-detail'))).toBeTruthy();
  // });

  // it('should open the Billing Page hiding search-main', () => {
  //   store.dispatch(new searchActions.LoadSuccess(mock.productsData.items));
  //   store.dispatch(new searchActions.SearchQuery('angular'));
  //   component.openBillPage(product);

  //   fixture.detectChanges();
  //   expect(fixture.debugElement.query(By.css('.billingPage'))).toBeTruthy();
  // });

  // it('should close all the child components showing search-main component', () => {
  //   store.dispatch(new searchActions.LoadSuccess(mock.productsData.items));
  //   store.dispatch(new searchActions.SearchQuery('angular'));
  //   component.closeProduct();

  //   fixture.detectChanges();
  //   expect(fixture.debugElement.query(By.css('.search-main'))).toBeTruthy();
  // });

});