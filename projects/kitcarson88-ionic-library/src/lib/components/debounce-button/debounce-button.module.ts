
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { DebounceButtonComponent } from './debounce-button.component';

import { DebounceClickDirective } from '../../directives/debounce-click/debounce-click.directive';

@NgModule({
    declarations: [
        DebounceButtonComponent, DebounceClickDirective
    ],
    imports: [
        CommonModule,
        IonicModule
    ],
    exports: [
        DebounceButtonComponent
    ]
})
export class DebounceButtonModule { }
