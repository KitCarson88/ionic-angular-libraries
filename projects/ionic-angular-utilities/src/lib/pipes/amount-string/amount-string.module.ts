import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { AmountStringPipe } from './amount-string.pipe';

@NgModule({
  declarations: [ AmountStringPipe ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [ AmountStringPipe ],
})
export class AmountStringModule { }
