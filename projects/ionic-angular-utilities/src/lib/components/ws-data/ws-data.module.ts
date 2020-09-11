import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { WsDataComponent } from './ws-data.component';
import { SpinnerModule } from '../spinner/spinner.module';
import { ErrorContainerModule } from '../error-container/error-container.module';

@NgModule({
	declarations: [
		WsDataComponent
	],
	imports: [
		CommonModule,
		IonicModule,
		SpinnerModule,
		ErrorContainerModule
	],
	exports: [
		WsDataComponent
	]
})
export class WsDataModule {}
