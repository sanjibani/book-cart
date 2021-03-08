import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from '@cart-angular/types';
import { Store } from '@ngrx/store';
import { AppService } from '../../../app.service';
import * as fromProduct from '@cart-angular/cart-state';
import { AppConstants } from '@cart-angular/types';
import { CartFacade } from '@cart-angular/cart-state';
import { Subscription, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'cart-angular-cart-main',
  templateUrl: './cart-main.component.html',
  styleUrls: ['./cart-main.component.scss']
})
export class CartMainComponent implements OnInit, OnDestroy {
  viewFlag = false;
  billingFlag = false;
  productDetail: Product;
  componentActive = true;
  cartSubscription$: Subscription;
  appConstants = AppConstants;
  unSubscribe = new Subject<void>();
  constructor(private store: Store<fromProduct.State>, public appService: AppService, public facade: CartFacade) {}

  products = [];
  ngOnInit(): void {
    this.cartSubscription$ = this.facade.cartProducts$.pipe(takeUntil(this.unSubscribe)).subscribe(cartList => {
      this.products = cartList;
    });
  }

  viewProduct(product: Product) {
    this.viewFlag = true;
    this.billingFlag = false;
    this.productDetail = product;
  }

  closeProduct() {
    this.viewFlag = false;
    this.billingFlag = false;
  }

  openBillPage(product: Product) {
    this.viewFlag = false;
    this.billingFlag = true;
    this.productDetail = product;
  }

  removeProduct() {
    this.closeProduct();
    this.appService.messageSuccess = true;
    this.appService.toggleMessageWindow();
  }

  ngOnDestroy() {
    // this.cartSubscription$.unsubscribe();
    this.unSubscribe.next();
    this.unSubscribe.complete();
  }
}
