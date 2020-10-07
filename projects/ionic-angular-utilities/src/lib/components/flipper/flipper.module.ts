import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { FlipperComponent } from './flipper.component';

@NgModule({
	declarations: [
		FlipperComponent
	],
	imports: [
		CommonModule,
		IonicModule
	],
	exports: [
		FlipperComponent
	]
})
export class FlipperModule {}