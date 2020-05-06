import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromProduct from '@cart-angular/cart-state';
import * as cartActions from '@cart-angular/cart-state';
import { CartFacade } from '@cart-angular/cart-state';

@Component({
  selector: 'cart-angular-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  @Input() pageInput;
  @Input() productDetail;
  @Output() closeProduct = new EventEmitter();
  @Output() addorRemove = new EventEmitter();
  @Output() openBillPage = new EventEmitter();
  constructor(private store: Store<fromProduct.State>, public facade: CartFacade) { }

  ngOnInit(): void {
  }

  closeProductDetail() {
    this.closeProduct.emit();
  }

  openBillingPage() {
    this.openBillPage.emit(this.productDetail);
  }

  addtoCart() {
    // this.store.dispatch(new cartActions.AddtoCart(this.productDetail));
    this.facade.dispatchProductsToStore(this.productDetail);
    this.addorRemove.emit();
  }

  removeFromCart() {
    // this.store.dispatch(new cartActions.RemovefromCart(this.productDetail));
    this.facade.removeFromCart(this.productDetail);
    this.addorRemove.emit();
  }

}
