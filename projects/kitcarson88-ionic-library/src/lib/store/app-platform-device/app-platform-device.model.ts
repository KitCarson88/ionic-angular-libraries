export interface AppPlatformDeviceState
{
    infos: {
        appName: string;
        appPackageName: string;
        appVersion: string;
        appBuild: string;
        manufacturer: string;
        model: string;  //a code that identifies device model
        uuid: string;
        serial: string;
        os: 'ios' | 'android' | 'other';
        version: string;    //A device version
        platform: string;   //The os platform
        integration: 'cordova' | 'electron' | 'none';
        virtual: boolean;
        width: number;
        height: number;
        freeDiskSpace: number;
        totalDiskSpace: number;
        memoryUsage: number;
    };
};

export const INITIAL_STATE_APP_PLATFORM_DEVICE: AppPlatformDeviceState = {
    infos: null
};