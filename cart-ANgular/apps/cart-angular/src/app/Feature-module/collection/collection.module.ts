import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';

import { CollectionMainComponent } from './components/collection-main/collection-main.component';

const routes: Routes = [
  {
    path: '',
    component: CollectionMainComponent
  }
];

@NgModule({
  declarations: [CollectionMainComponent],
  imports: [CommonModule, RouterModule.forChild(routes), MatCardModule]
})
export class CollectionModule {}
