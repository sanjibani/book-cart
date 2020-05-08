import { Component, OnInit, OnDestroy } from '@angular/core';
import { CartFacade } from '@cart-angular/cart-state';
import { Subscription } from 'rxjs';

@Component({
  selector: 'cart-angular-collection-main',
  templateUrl: './collection-main.component.html',
  styleUrls: ['./collection-main.component.scss']
})
export class CollectionMainComponent implements OnInit, OnDestroy {

  purchasedProducts = [];
  componentActive = true;
  collectionSubscription$: Subscription;
  constructor(public facade: CartFacade) { }

  ngOnInit(): void {
  this.collectionSubscription$ = this.facade.collectionProducts$
  .subscribe(collectionList => {
        this.purchasedProducts = collectionList;
    });
  }

  ngOnDestroy() {
    this.collectionSubscription$.unsubscribe();
  }

}