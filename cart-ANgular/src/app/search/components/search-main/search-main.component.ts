import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared-module/models/product.model';
import { Store, select } from '@ngrx/store';
import * as fromProduct from '../../../state/reducers/search.reducer';
import * as searchActions from '../../../state/actions/search.action';
import { AppService } from 'src/app/app.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-cart-search-main',
  templateUrl: './search-main.component.html',
  styleUrls: ['./search-main.component.scss']
})
export class SearchMainComponent implements OnInit {
  viewFlag = false;
  billingFlag = false;
  productDetail: Product;
  products: Product[];
  errors;
  constructor(private store: Store<fromProduct.State>, public appService: AppService) { }

  searchForm = new FormGroup({
    searchQuery: new FormControl()
  });

  ngOnInit(): void {
    // get search string from store
    this.store.pipe(select(fromProduct.getSearchString)).subscribe(searchString => {
        this.searchForm.get('searchQuery').setValue(searchString);
    });

    // get search results from store on success
    this.store.pipe(select(fromProduct.getProductList)).subscribe(productList => {
      this.products = productList;
  });

  // get error response from store on failure
    this.store.pipe(select(fromProduct.getErrorResponse)).subscribe(errors => {
    this.errors = errors;
});
  }

  // dispatching the actions to change the state
  searchHandle() {
    this.store.dispatch(new searchActions.SearchQuery(this.searchForm.value.searchQuery));
    this.store.dispatch(new searchActions.Load(this.searchForm.value.searchQuery));
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
