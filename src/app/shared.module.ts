import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ListCoreComponent } from './list-core/list-core.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule
  ],
  declarations: [
    ListCoreComponent
  ],
  exports: [
    ListCoreComponent
  ]
})
export class SharedModule { }
