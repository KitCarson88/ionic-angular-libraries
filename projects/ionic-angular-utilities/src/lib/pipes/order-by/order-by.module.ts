import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { OrderByPipe } from './order-by.pipe';

@NgModule({
  declarations: [
    OrderByPipe
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    OrderByPipe
  ]
})
export class OrderByModule { }
