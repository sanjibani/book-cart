import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared-module/models/product.model';
import { Store, select } from '@ngrx/store';
import { AppService } from 'src/app/app.service';
import * as fromProduct from '../../state/reducers/cartInfo.reducer';

@Component({
  selector: 'app-cart-main',
  templateUrl: './cart-main.component.html',
  styleUrls: ['./cart-main.component.scss']
})
export class CartMainComponent implements OnInit {

  viewFlag = false;
  billingFlag = false;
  productDetail: Product;
  constructor(private store: Store<fromProduct.State>, public appService: AppService) { }

  products = [];
  ngOnInit(): void {
    // this.store.pipe(select('cartInfo')).subscribe(cart => {
    //   if (cart) {
    //     this.products = cart.cartList;
    //   }
    // });
    this.store.pipe(select(fromProduct.getCartList)).subscribe(cartList => {
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
  }

  removesuccess() {
    this.closeProduct();
    this.appService.messageSuccess = true;
    this.appService.toggleMessageWindow();
  }
}
