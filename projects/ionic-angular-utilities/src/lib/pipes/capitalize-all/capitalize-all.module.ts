import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { CapitalizeAllPipe } from './capitalize-all.pipe';

@NgModule({
  declarations: [
    CapitalizeAllPipe
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    CapitalizeAllPipe
  ]
})
export class CapitalizeAllModule { }
