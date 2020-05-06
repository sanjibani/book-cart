import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
// import { Product } from '../../../../../../apps/cart-angular/src/app/models/product.model';
import { Product } from '@cart-angular/types';
import * as fromProduct from '@cart-angular/cart-state';
import * as cartActions from '@cart-angular/cart-state';
import { Store } from '@ngrx/store';
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
  constructor(private store: Store<fromProduct.State>, public facade: CartFacade) { }

  ngOnInit(): void {
  }

  viewProduct(product: Product) {
      this.viewEvent.emit(product);
  }

  removeFromCart(product) {
    // this.store.dispatch(new cartActions.RemovefromCart(product));
    this.facade.removeFromCart(product);
    this.addorRemove.emit();
  }

  openBillingPage(product) {
    this.openBillPage.emit(product);
  }

}
