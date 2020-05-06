import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'cart-angular-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'Cart-Angular';
  cart;
  collection;
  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.store.pipe(select('cartInfo')).subscribe(cart => {
      if (cart) {
        this.cart = cart.cartList;
        this.collection = cart.collectionList;
      }
    });
  }
}
