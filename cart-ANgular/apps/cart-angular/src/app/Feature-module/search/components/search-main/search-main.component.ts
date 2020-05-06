import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from '@cart-angular/types';
import { Store, select } from '@ngrx/store';
import * as fromProduct from '@cart-angular/search-state';
import * as searchActions from '@cart-angular/search-state';
import { AppService } from '../../../../app.service';
import { FormGroup, FormControl } from '@angular/forms';
import { AppConstants } from '@cart-angular/types';
import { takeWhile } from 'rxjs/operators';
import { SearchFacade } from '@cart-angular/search-state';

@Component({
  selector: 'cart-angular-cart-search-main',
  templateUrl: './search-main.component.html',
  styleUrls: ['./search-main.component.scss']
})
export class SearchMainComponent implements OnInit, OnDestroy {
  viewFlag = false;
  billingFlag = false;
  componentActive = true;
  productDetail: Product;
  products: Product[];
  errors;
  searchSubscription$;
  productSubscription$;
  errorSubscription$;
  searchInput = AppConstants.SEARCH_INPUT;
  constructor(private store: Store<fromProduct.State>, public appService: AppService, 
    public facade: SearchFacade ) { }

  searchForm = new FormGroup({
    searchQuery: new FormControl()
  });

  ngOnInit(): void {
    // get search string from store
    // this.store.pipe(select(fromProduct.getSearchString),
    // takeWhile(() => this.componentActive))
    // .subscribe(searchString => {
    //     this.searchForm.get('searchQuery').setValue(searchString);
    // });

    this.searchSubscription$ = this.facade.searchString$
    .subscribe(searchString => {
        this.searchForm.get('searchQuery').setValue(searchString);
    });

    // get search results from store on success
  //   this.store.pipe(select(fromProduct.getProductList),
  //   takeWhile(() => this.componentActive))
  //   .subscribe(productList => {
  //     this.products = productList;
  // });
  this.productSubscription$ = this.facade.productList$
  .subscribe(productList => {
        this.products = productList;
    });

  // get error response from store on failure
//     this.store.pipe(select(fromProduct.getErrorResponse),
//     takeWhile(() => this.componentActive))
//     .subscribe(errors => {
//     this.errors = errors;
// });
this.errorSubscription$ = this.facade.error$
.subscribe(errors => {
      this.errors = errors;
  })
  }

  ngOnDestroy() {
    // this.componentActive = false;
    this.searchSubscription$.unsubscribe();
    this.productSubscription$.unsubscribe();
    this.errorSubscription$.unsubscribe();
  }

  // dispatching the actions to change the state
  searchHandle() {
    // this.store.dispatch(new searchActions.SearchQuery(this.searchForm.value.searchQuery));
    // this.store.dispatch(new searchActions.Load(this.searchForm.value.searchQuery));
    this.facade.loadProductstoStore(this.searchForm.value.searchQuery);
  }

  // Enabling and Disabling the component for Product Detail
  viewProduct(product: Product) {
    this.viewFlag = true;
    this.billingFlag = false;
    this.productDetail = product;
  }
  closeProduct() {
    this.viewFlag = false;
    this.billingFlag = false;
  }
  addsuccess() {
    this.closeProduct();
    this.appService.messageSuccess = true;
    this.appService.toggleMessageWindow();
  }

  // Enabling and Disabling the component for Bill Page
  openBillPage(product: Product) {
    this.viewFlag = false;
    this.billingFlag = true;
  }
}
