import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListDetailPage } from './list-detail.page';
import { SharedModule } from '../shared.module';

const routes: Routes = [
  {
    path: '',
    component: ListDetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [ListDetailPage]
})
export class ListDetailPageModule {}
