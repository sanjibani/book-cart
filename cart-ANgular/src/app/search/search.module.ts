import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchMainComponent } from './components/search-main/search-main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SharedModuleModule } from '../shared-module/shared-module.module';
import { StoreModule } from '@ngrx/store';
import { reducer } from '../state/reducers/search.reducer';
import { EffectsModule } from '@ngrx/effects';
import { SearchEffects } from '../state/effects/search.effects';
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
    SharedModuleModule,
    ReactiveFormsModule,
    StoreModule.forFeature('products', reducer),
    EffectsModule.forFeature([SearchEffects]),
    FormsModule,
    RouterModule.forChild(routes)
  ],
})
export class SearchModule { }
