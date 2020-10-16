import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SortPipe } from './sort.pipe';



@NgModule({
  declarations: [SortPipe],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [ SortPipe ]
})
export class SortModule { }
