import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { BackButtonComponent } from './back-button/back-button.component';
import { ListCoreComponent } from './list-core/list-core.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule
  ],
  declarations: [
    BackButtonComponent,
    ListCoreComponent
  ],
  exports: [
    BackButtonComponent,
    ListCoreComponent
  ]
})
export class SharedModule { }
