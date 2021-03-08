import { Action } from '@ngrx/store';

import { Product } from '@cart-angular/types';
import { ProductCollection } from '@cart-angular/types';

export enum CartActionTypes {
  AddtoCart = 'ADD_TO_CART',
  RemovefromCart = 'REMOVE_FROM_CART',
  AddtoCollections = 'ADD_COLLECTIONS'
}

export class AddtoCart implements Action {
  readonly type = CartActionTypes.AddtoCart;

  constructor(public payload: Product) {}
}

export class RemovefromCart implements Action {
  readonly type = CartActionTypes.RemovefromCart;

  constructor(public payload: Product) {}
}

export class AddtoCollections implements Action {
  readonly type = CartActionTypes.AddtoCollections;

  constructor(public payload: ProductCollection) {}
}

export type CartActions = AddtoCart | RemovefromCart | AddtoCollections;
