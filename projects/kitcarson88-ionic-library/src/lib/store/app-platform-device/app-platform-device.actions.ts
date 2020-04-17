import { Injectable } from "@angular/core";
import { dispatch } from "@angular-redux/store";
import { Action } from "redux";

export interface AppPlatformDeviceAction extends Action
{
    payload?: any;
}

@Injectable()
export class AppPlatformDeviceActions
{
    static readonly INIT_INFOS = 'INIT_INFOS';

    constructor() { }

    @dispatch()
    initializeInfos = (options: {
        appVersion?: string,
        appBuild?: string,
        manufacturer?: string,
        model?: string,
        uuid?: string,
        serial?: string,
        os?: 'ios' | 'android' | 'other',
        version?: string,
        platform?: string,
        integration?: 'cordova' | 'electron' | 'none',
        virtual?: boolean,
        width?: number,
        height?: number,
        freeDiskSpace?: number,
        totalDiskSpace?: number,
        memoryUsage?: number
    }): AppPlatformDeviceAction => ({
        type: AppPlatformDeviceActions.INIT_INFOS, payload: options
    });
}