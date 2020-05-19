import { Injectable, Inject } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { LibConfigService, LibConfig } from '../kitcarson88-ionic-library.module';

import { AppVersion } from '@ionic-native/app-version/ngx';
import { Device } from '@ionic-native/device/ngx';
import { HTTP } from '@ionic-native/http/ngx';
import { Media } from '@ionic-native/media/ngx';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NavigationBar } from '@ionic-native/navigation-bar/ngx';
import { AndroidFullScreen } from '@ionic-native/android-full-screen/ngx';
import { NativeAudio } from '@ionic-native/native-audio/ngx';

////////////////////Mock providers
@Injectable()
class Mock
{
    constructor(@Inject(LibConfigService) protected config: LibConfig) { }

    protected isMockAvailable(mock: string)
    {
        return this.config && this.config.ionicMock && this.config.ionicMock[ mock ];
    }
}

@Injectable()
export class AppVersionMock extends Mock
{
    getAppName(): Promise<string>
    {
        return new Promise((resolve, reject) =>
        {
            if (this.isMockAvailable('appVersion'))
                this.config.ionicMock.appVersion.appName ?
                    resolve(this.config.ionicMock.appVersion.appName) :
                    reject('An error occured retrieving appName data from AppVersion mock');
        });
    }

    getPackageName(): Promise<string>
    {
        return new Promise((resolve, reject) =>
        {
            if (this.isMockAvailable('appVersion'))
                this.config.ionicMock.appVersion.packageName ?
                    resolve(this.config.ionicMock.appVersion.packageName) :
                    reject('An error occured retrieving packageName data from AppVersion mock');
        });
    }

    getVersionCode(): Promise<string | number>
    {
        return new Promise((resolve, reject) =>
        {
            if (this.isMockAvailable('appVersion'))
                this.config.ionicMock.appVersion.versionCode ?
                    resolve(this.config.ionicMock.appVersion.versionCode) :
                    reject('An error occured retrieving versionCode data from AppVersion mock');
        });
    }

    getVersionNumber(): Promise<string>
    {
        return new Promise((resolve, reject) =>
        {
            if (this.isMockAvailable('appVersion'))
                this.config.ionicMock.appVersion.versionNumber ?
                    resolve(this.config.ionicMock.appVersion.versionNumber) :
                    reject('An error occured retrieving versionNumber data from AppVersion mock');
        });
    }
}

@Injectable()
export class DeviceMock extends Mock
{
    cordova: string = this.isMockAvailable('device') && this.config.ionicMock.device.cordova ? this.config.ionicMock.device.cordova : "browser";
    model: string = this.isMockAvailable('device') && this.config.ionicMock.device.cordova ? this.config.ionicMock.device.model : "not available";
    platform: string = this.isMockAvailable('device') && this.config.ionicMock.device.cordova ? this.config.ionicMock.device.platform : "not available";
    uuid: string = this.isMockAvailable('device') && this.config.ionicMock.device.cordova ? this.config.ionicMock.device.uuid : "not available";
    version: string = this.isMockAvailable('device') && this.config.ionicMock.device.cordova ? this.config.ionicMock.device.version : "not available";
    manufacturer: string = this.isMockAvailable('device') && this.config.ionicMock.device.cordova ? this.config.ionicMock.device.manufacturer : "not available";
    isVirtual: boolean = this.isMockAvailable('device') && this.config.ionicMock.device.cordova ? this.config.ionicMock.device.isVirtual : true;
    serial: string = this.isMockAvailable('device') && this.config.ionicMock.device.cordova ? this.config.ionicMock.device.serial : "not available";
}

@Injectable()
export class MediaMock
{

}

@Injectable()
export class NativeStorageMock
{
    setItem(reference: string, value: any): Promise<any>
    {
        localStorage.setItem(reference, value);
        return new Promise((resolve, reject) =>
        {
            resolve({});
        });
    }

    getItem(reference: string): Promise<any>
    {
        let value = localStorage.getItem(reference);
        return new Promise((resolve, reject) =>
        {
            resolve(value);
        });
    }

    remove(reference: string): Promise<any>
    {
        localStorage.removeItem(reference);
        return new Promise((resolve, reject) =>
        {
            resolve({});
        });
    }
}

@Injectable()
export class HTTPMock
{
    constructor(private http: HttpClient)
    {
    }

    get(endpoint: string, params?: any, header?: any)
    {
        return new Promise(async (resolve, reject) =>
        {
            try
            {
                let response = await this.http.get(endpoint, { headers: header }).toPromise();
                resolve({ data: JSON.stringify(response) });
            }
            catch (err)
            {
                reject(err);
            }
        });
    }

    post(endpoint: string, body?: any, header?: any)
    {
        return new Promise(async (resolve, reject) =>
        {
            try
            {
                let response = await this.http.post(endpoint, body, { headers: header }).toPromise();
                resolve({ data: JSON.stringify(response) });
            }
            catch (err)
            {
                reject(err);
            }
        });
    }

    setDataSerializer(): void
    {

    }

    setRequestTimeout(timeout: number): void
    {
        return;
    }
}

@Injectable()
export class StatusBarMock
{
    hide()
    {

    }
}

@Injectable()
export class NavigationBarMock
{
    setUp(autohide?): Promise<any>
    {
        return new Promise((resolve, reject) =>
        {
            resolve({});
        });
    }

    hideNavigationBar(): Promise<any>
    {
        return new Promise((resolve, reject) =>
        {
            resolve({});
        });
    }
}

@Injectable()
export class AndroidFullScreenMock
{
    isImmersiveModeSupported(): Promise<void>
    {
        return new Promise((resolve, rejcet) =>
        {
            resolve();
        });
    }

    immersiveMode(): Promise<void>
    {
        return new Promise((resolve, rejcet) =>
        {
            resolve();
        });
    }

    leanMode(): Promise<void>
    {
        return new Promise((resolve, rejcet) =>
        {
            resolve();
        });
    }
}

@Injectable()
export class NativeAudioMock
{
    preloadSimple(id: string, path: string): Promise<any>
    {
        return new Promise((resolve, reject) =>
        {
            resolve();
        });
    }

    preloadComplex(id: string, path: string, volume: number, voices: number, delay: number): Promise<any>
    {
        return new Promise((resolve, reject) =>
        {
            resolve();
        });
    }

    play(id: string, callback?: Function): Promise<any>
    {
        return new Promise((resolve, reject) =>
        {
            resolve();
        });
    }

    loop(id: string): Promise<any>
    {
        return new Promise((resolve, reject) =>
        {
            resolve();
        });
    }

    stop(id: string): Promise<any>
    {
        return new Promise((resolve, reject) =>
        {
            resolve();
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
export function getDevice(): any
{
    return hasCordova() ? Device : DeviceMock;
}
export function getNativeStorage(): any
{
    return hasCordova() ? NativeStorage : NativeStorageMock;
}
export function getHTTP(): any
{
    return hasCordova() ? HTTP : HTTPMock;
}
export function getMedia(): any
{
    return hasCordova() ? Media : MediaMock;
}
export function getStatusBar(): any
{
    return hasCordova() ? StatusBar : StatusBarMock;
}
export function getNavigationBar(): any
{
    return hasCordova() ? NavigationBar : NavigationBarMock;
}
export function getAndroidFullScreen(): any
{
    return hasCordova() ? AndroidFullScreen : AndroidFullScreenMock;
}
export function getNativeAudio(): any
{
    return hasCordova() ? NativeAudio : NativeAudioMock;
}