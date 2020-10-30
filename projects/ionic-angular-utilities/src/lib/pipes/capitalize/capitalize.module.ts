import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { CapitalizePipe } from './capitalize.pipe';

@NgModule({
  declarations: [
    CapitalizePipe
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    CapitalizePipe
  ]
})
export class CapitalizeModule { }
