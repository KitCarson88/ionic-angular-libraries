import { NgModule, ModuleWithProviders, InjectionToken } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

export interface LibConfig {
  //Add here parameters coming from .forRoot() method
}

export const LibConfigService = new InjectionToken<LibConfig>('LibConfig');

@NgModule({
  declarations: [
    //Declare here components
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    //Export here components
  ]
})
export class Kitcarson88IonicLibraryModule
{
  static forRoot(config?: LibConfig): ModuleWithProviders {
    return {
      ngModule: Kitcarson88IonicLibraryModule,
      providers: [
        //Here provide services
        {
          provide: LibConfigService,
          useValue: config
        }
      ]
    };
  }
}