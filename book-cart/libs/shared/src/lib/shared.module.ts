import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';

import { StarRatingComponent } from './components/star-rating/star-rating.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { BillingPageComponent } from './components/billing-page/billing-page.component';
import { reducer } from '@cart-angular/cart-state';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, FormsModule, MatCardModule, StoreModule.forFeature('cartInfo', reducer)],
  declarations: [StarRatingComponent, ProductListComponent, ProductDetailComponent, BillingPageComponent],
  exports: [StarRatingComponent, ProductListComponent, ProductDetailComponent, BillingPageComponent]
})
export class SharedModule {}
