import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SortDatePipe } from './sort-date.pipe';



@NgModule({
  declarations: [SortDatePipe],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [ SortDatePipe ]
})
export class SortDateModule { }
