import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { AppService } from '../../../../app.service';
import { Product } from '@cart-angular/types';
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
  unSubscribe = new Subject<void>();
  appConstants = AppConstants;
  constructor(public appService: AppService, public facade: SearchFacade) {}

  searchForm = new FormGroup({
    searchQuery: new FormControl()
  });

  ngOnInit(): void {
    // get search string from store
    this.facade.searchString$.pipe(takeUntil(this.unSubscribe)).subscribe(searchString => {
      this.searchForm.get('searchQuery').setValue(searchString);
    });

    // get search results from store on success
    this.facade.productList$.pipe(takeUntil(this.unSubscribe)).subscribe(productList => {
      this.products = productList;
    });

    // get error response from store on failure
    this.facade.error$.pipe(takeUntil(this.unSubscribe)).subscribe(errors => {
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
    this.unSubscribe.next();
    this.unSubscribe.complete();
  }
}
