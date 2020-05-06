import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectionMainComponent } from './components/collection-main/collection-main.component';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';

const routes: Routes = [
  {
    path: '',
    component: CollectionMainComponent
    }
];

@NgModule({
  declarations: [CollectionMainComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule
  ]
})
export class CollectionModule { }
