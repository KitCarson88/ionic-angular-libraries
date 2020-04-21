import { NgModule, ModuleWithProviders, InjectionToken } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

export interface LibConfig {
  //Add here parameters coming from .forRoot() method
  ionicMock?: {
    appVersion?: {
      appName?: string,
      packageName?: string,
      versionCode?: string | number,
      versionNumber?: string
    },
    device?: {
      cordova?: string,
      model?: string,
      platform?: string,
      uuid?: string,
      version?: string,
      manufacturer?: string,
      isVirtual?: boolean,
      serial?: string,
    }
  }
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