import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromProduct from '../../../state/reducers/cartInfo.reducer';
import * as cartActions from '../../../state/actions/cartInfo.action';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  @Input() pageInput;
  @Input() productDetail;
  @Output() closeProduct = new EventEmitter();
  @Output() addorRemove = new EventEmitter();
  @Output() openBillPage = new EventEmitter();
  constructor(private store: Store<fromProduct.State>) { }

  ngOnInit(): void {
  }

  closeProductDetail() {
    this.closeProduct.emit();
  }

  openBillingPage() {
    this.openBillPage.emit(this.productDetail);
  }

  addtoCart() {
//     this.store.dispatch({
//       type: 'ADD_TO_CART',
//       payload: this.productDetail
//  });
    this.store.dispatch(new cartActions.AddtoCart(this.productDetail));
    this.addorRemove.emit();
  }

  removeFromCart() {
    // this.store.dispatch({
    //   type: 'REMOVE_FROM_CART',
    //   payload: this.productDetail
    //  });
    this.store.dispatch(new cartActions.RemovefromCart(this.productDetail));
    this.addorRemove.emit();
  }

}
