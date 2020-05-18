import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { Product, AppConstants } from '@cart-angular/types';
import { CartFacade } from '@cart-angular/cart-state';

@Component({
  selector: 'cart-angular-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  @Input() pageInput;
  @Input() productList;
  @Output() viewEvent = new EventEmitter();
  @Output() addorRemove = new EventEmitter();
  @Output() openBillPage = new EventEmitter();
  constructor(public facade: CartFacade) {}

  appContants = AppConstants;

  ngOnInit(): void {}

  viewProduct(product: Product) {
    this.viewEvent.emit(product);
  }

  removeFromCart(product) {
    this.facade.removeFromCart(product);
    this.addorRemove.emit();
  }

  openBillingPage(product) {
    this.openBillPage.emit(product);
  }
}
