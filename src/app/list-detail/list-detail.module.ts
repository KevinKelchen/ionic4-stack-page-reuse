import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BackButtonComponent } from '../back-button/back-button.component';
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
  declarations: [
    BackButtonComponent,
    ListDetailPage
  ]
})
export class ListDetailPageModule {}
