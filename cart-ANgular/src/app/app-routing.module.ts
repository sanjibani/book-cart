import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'search',
    loadChildren: () =>
          import('./search/search.module').then(m => m.SearchModule)
  },
  {
    path: 'cart',
    loadChildren: () =>
    import('./cart/cart.module').then(m => m.CartModule)
  },
  {
    path: 'collections',
    loadChildren: () =>
    import('./collection/collection.module').then(m => m.CollectionModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
