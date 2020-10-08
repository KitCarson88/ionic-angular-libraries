
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { DebounceButtonComponent } from './debounce-button.component';

import { DebounceClickModule } from '../../directives/debounce-click/debounce-click.module';

@NgModule({
    declarations: [
        DebounceButtonComponent
    ],
    imports: [
        CommonModule,
        IonicModule,
        DebounceClickModule
    ],
    exports: [
        DebounceButtonComponent
    ]
})
export class DebounceButtonModule { }
