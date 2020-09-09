import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { SpinnerComponent } from './spinner.component';

import { CentralizerModule } from '../centralizer/centralizer.module';

@NgModule({
	declarations: [
		SpinnerComponent
	],
	imports: [
		CommonModule,
		IonicModule,
		CentralizerModule
	],
	exports: [
		SpinnerComponent
	]
})
export class SpinnerModule {}
