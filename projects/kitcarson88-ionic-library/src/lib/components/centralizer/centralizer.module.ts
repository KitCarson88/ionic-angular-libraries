
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { CentralizerComponent } from './centralizer.component';

@NgModule({
    declarations: [
        CentralizerComponent
    ],
    imports: [
        CommonModule,
        IonicModule
    ],
    exports: [
        CentralizerComponent
    ]
})
export class CentralizerModule { }
