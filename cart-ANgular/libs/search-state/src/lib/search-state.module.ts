import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromSearch from './+state/search.reducer';
import { SearchEffects } from './+state/search.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('products', fromSearch.reducer),
    EffectsModule.forFeature([SearchEffects])
  ]
})
export class SearchStateModule {}
