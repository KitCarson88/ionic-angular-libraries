import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CentralizerComponent } from './centralizer.component';

@NgModule({
    declarations: [
        CentralizerComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        CentralizerComponent
    ]
})
export class CentralizerModule { }
