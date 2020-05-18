import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { Product } from '@cart-angular/types';
import { AppService } from '../../../../app.service';
import { AppConstants } from '@cart-angular/types';
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
  constructor(public appService: AppService, public facade: SearchFacade) {}

  searchForm = new FormGroup({
    searchQuery: new FormControl()
  });

  ngOnInit(): void {
    // get search string from store
    this.searchSubscription$ = this.facade.searchString$.subscribe(searchString => {
      this.searchForm.get('searchQuery').setValue(searchString);
    });

    // get search results from store on success
    this.productSubscription$ = this.facade.productList$.subscribe(productList => {
      this.products = productList;
    });

    // get error response from store on failure
    this.errorSubscription$ = this.facade.error$.subscribe(errors => {
      this.errors = errors;
    });
  }

  // dispatching the actions to change the state
  searchHandle() {
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

  ngOnDestroy() {
    this.searchSubscription$.unsubscribe();
    this.productSubscription$.unsubscribe();
    this.errorSubscription$.unsubscribe();
  }
}
