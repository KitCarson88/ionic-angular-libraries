import { NgModule, InjectionToken, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

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
    },
    diagnostic?: {
      isCameraPresent?: any,
      isCameraAuthorized?: any,
      isLocationEnabled?: boolean,
      isLocationAvailable?: any,
      isLocationAuthorized?: any,
      requestCameraAuthorization?: any,
      requestLocationAuthorization?: any,
    }
  }
}

export const LibConfigService = new InjectionToken<LibConfig>('LibConfig');

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    
  ]
})
export class IonicAngularUtilitiesModule
{
  static forRoot(config?: LibConfig): ModuleWithProviders<IonicAngularUtilitiesModule> {
    return {
      ngModule: IonicAngularUtilitiesModule,
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
