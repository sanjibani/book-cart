import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromCart from './+state/cart.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('cartInfo', fromCart.reducer),
  ]
})
export class SearchStateModule {}
