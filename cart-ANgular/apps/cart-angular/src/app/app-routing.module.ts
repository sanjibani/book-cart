import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


export const routes: Routes = [
  {
    path: 'search',
    loadChildren: () =>
          import('./Feature-module/search/search.module').then(m => m.SearchModule)
  },
  {
    path: 'cart',
    loadChildren: () =>
    import('./Feature-module/cart/cart.module').then(m => m.CartModule)
  },
  {
    path: 'collections',
    loadChildren: () =>
    import('./Feature-module/collection/collection.module').then(m => m.CollectionModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
