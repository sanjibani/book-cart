import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarRatingComponent } from './components/star-rating/star-rating.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { MatCardModule } from '@angular/material/card';
import { ProductListComponent } from './components/product-list/product-list.component';
import { BillingPageComponent } from './components/billing-page/billing-page.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { reducer } from '../state/reducers/cartInfo.reducer';

@NgModule({
  declarations: [StarRatingComponent, ProductDetailComponent, ProductListComponent, BillingPageComponent],
  imports: [
    CommonModule,
    MatCardModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forFeature('cartInfo', reducer),
    MatCardModule,
  ],
  exports: [StarRatingComponent, ProductDetailComponent, ProductListComponent, BillingPageComponent]
})
export class SharedModuleModule { }
