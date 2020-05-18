import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { SearchMainComponent } from './components/search-main/search-main.component';
import { reducer } from '@cart-angular/search-state';
import { SharedModule } from '@cart-angular/shared';

import { SearchEffects } from '@cart-angular/search-state';
const routes: Routes = [
  {
    path: '',
    component: SearchMainComponent
  }
];

@NgModule({
  declarations: [SearchMainComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature('products', reducer),
    EffectsModule.forFeature([SearchEffects]),
    FormsModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class SearchModule {}
