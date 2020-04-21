import { Injectable, Inject } from '@angular/core';

import { LibConfigService, LibConfig } from '../kitcarson88-ionic-library.module';

import { AppVersion } from '@ionic-native/app-version/ngx';

////////////////////Mock providers
@Injectable()
class Mock
{
    constructor(@Inject(LibConfigService) protected config: LibConfig) { }

    protected isMockAvailable(mock: string)
    {
        return this.config && this.config.ionicMock && this.config.ionicMock[mock];
    }
}

@Injectable()
export class AppVersionMock extends Mock
{
    getAppName(): Promise<string>
    {
        return new Promise((resolve, reject) => {
            if (this.isMockAvailable('appVersion'))
                this.config.ionicMock.appVersion.appName? 
                    resolve(this.config.ionicMock.appVersion.appName) : 
                    reject('An error occured retrieving appName data from AppVersion mock')
        });
    }

    getPackageName(): Promise<string>
    {
        return new Promise((resolve, reject) => {
            if (this.isMockAvailable('appVersion'))
                this.config.ionicMock.appVersion.packageName? 
                    resolve(this.config.ionicMock.appVersion.packageName) : 
                    reject('An error occured retrieving packageName data from AppVersion mock')
        });
    }

    getVersionCode(): Promise<string | number>
    {
        return new Promise((resolve, reject) => {
            if (this.isMockAvailable('appVersion'))
                this.config.ionicMock.appVersion.versionCode? 
                    resolve(this.config.ionicMock.appVersion.versionCode) : 
                    reject('An error occured retrieving versionCode data from AppVersion mock')
        });
    }

    getVersionNumber(): Promise<string>
    {
        return new Promise((resolve, reject) => {
            if (this.isMockAvailable('appVersion'))
                this.config.ionicMock.appVersion.versionNumber? 
                    resolve(this.config.ionicMock.appVersion.versionNumber) : 
                    reject('An error occured retrieving versionNumber data from AppVersion mock')
        });
    }
}

/////////////////////Cordova verify function
export function hasCordova(): boolean
{
    return window.hasOwnProperty('cordova');
}

/////////////////////Providers getters
export function getAppVersion(): any
{
    return hasCordova() ? AppVersion : AppVersionMock;
}