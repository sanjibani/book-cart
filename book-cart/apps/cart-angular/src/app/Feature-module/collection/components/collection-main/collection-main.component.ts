import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription, Subject } from 'rxjs';

import { CartFacade } from '@cart-angular/cart-state';
import { takeUntil } from 'rxjs/operators';
import { AppConstants } from '@cart-angular/types';

@Component({
  selector: 'cart-angular-collection-main',
  templateUrl: './collection-main.component.html',
  styleUrls: ['./collection-main.component.scss']
})
export class CollectionMainComponent implements OnInit, OnDestroy {
  purchasedProducts = [];
  componentActive = true;
  collectionSubscription$: Subscription;
  unSubscribe = new Subject<void>();
  appConstants = AppConstants;
  constructor(public facade: CartFacade) {}

  ngOnInit(): void {
    this.collectionSubscription$ = this.facade.collectionProducts$
      .pipe(takeUntil(this.unSubscribe))
      .subscribe(collectionList => {
        this.purchasedProducts = collectionList;
      });
  }

  ngOnDestroy() {
    // this.collectionSubscription$.unsubscribe();
    this.unSubscribe.next();
    this.unSubscribe.complete();
  }
}
