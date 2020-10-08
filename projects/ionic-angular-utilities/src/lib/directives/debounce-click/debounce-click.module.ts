import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { DebounceClickDirective } from './debounce-click.directive';

@NgModule({
	declarations: [
		DebounceClickDirective	
	],
	imports: [
		CommonModule,
		IonicModule
	],
	exports: [
		DebounceClickDirective
	]
})
export class DebounceClickModule {}