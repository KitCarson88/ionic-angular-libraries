import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { OrderByDatePipe } from './order-by-date.pipe';

@NgModule({
  declarations: [
    OrderByDatePipe
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    OrderByDatePipe
  ]
})
export class OrderByDateModule { }
