import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromProduct from '../../../state/reducers/cartInfo.reducer';

@Component({
  selector: 'app-collection-main',
  templateUrl: './collection-main.component.html',
  styleUrls: ['./collection-main.component.scss']
})
export class CollectionMainComponent implements OnInit {

  constructor(private store: Store<fromProduct.State>) { }
  purchasedProducts = [];

  ngOnInit(): void {
    // this.store.pipe(select('cartInfo')).subscribe(cart => {
    //   if (cart) {
    //     this.purchasedProducts = cart.collectionList;
    //   }
    // });
    this.store.pipe(select(fromProduct.getCollectionList)).subscribe(collectionList => {
      this.purchasedProducts = collectionList;
  });
  }

}
