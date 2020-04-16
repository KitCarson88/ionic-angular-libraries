import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { ErrorContainerComponent } from './error-container.component';

@NgModule({
	declarations: [
		ErrorContainerComponent
	],
	imports: [
		CommonModule,
		IonicModule,
	],
	exports: [
		ErrorContainerComponent
	]
})
export class ErrorContainerModule {}
