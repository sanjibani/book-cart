import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartMainComponent } from './cart-main/cart-main.component';
import { SharedModule } from '@cart-angular/shared';
import { RouterModule, Routes } from '@angular/router';
import { CartFacade } from '@cart-angular/cart-state';

const routes: Routes = [
  {
    path: '',
    component: CartMainComponent
    }
];

@NgModule({
  declarations: [CartMainComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class CartModule { }
