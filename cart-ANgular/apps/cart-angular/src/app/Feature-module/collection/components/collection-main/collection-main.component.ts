import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromProduct from '@cart-angular/cart-state';
import { takeWhile } from 'rxjs/operators';
import { CartFacade } from '@cart-angular/cart-state';

@Component({
  selector: 'cart-angular-collection-main',
  templateUrl: './collection-main.component.html',
  styleUrls: ['./collection-main.component.scss']
})
export class CollectionMainComponent implements OnInit, OnDestroy {

  purchasedProducts = [];
  componentActive = true;
  collectionSubscription$;
  constructor(private store: Store<fromProduct.State>, public facade: CartFacade) { }

  ngOnInit(): void {
  //   this.store.pipe(select(fromProduct.getCollectionList),
  //   takeWhile(() => this.componentActive)).subscribe(collectionList => {
  //     this.purchasedProducts = collectionList;
  // });
  this.collectionSubscription$ = this.facade.collectionProducts$
  .subscribe(collectionList => {
        this.purchasedProducts = collectionList;
    });
  }

  ngOnDestroy() {
    // this.componentActive = false;
    this.collectionSubscription$.unsubscribe();
  }

}
