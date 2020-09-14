import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { WsDataListComponent } from './ws-data-list.component';
import { SpinnerModule } from '../spinner/spinner.module';
import { ErrorContainerModule } from '../error-container/error-container.module';

@NgModule({
	declarations: [
		WsDataListComponent
	],
	imports: [
		CommonModule,
		IonicModule,
		SpinnerModule,
		ErrorContainerModule
	],
	exports: [
		WsDataListComponent
	]
})
export class WsDataListModule {}
