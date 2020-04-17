import { AppPlatformDeviceState, INITIAL_STATE_APP_PLATFORM_DEVICE } from './app-platform-device.model';
import { AppPlatformDeviceActions, AppPlatformDeviceAction } from './app-platform-device.actions';

export function appPlatformDeviceReducer(state: AppPlatformDeviceState = INITIAL_STATE_APP_PLATFORM_DEVICE, action: AppPlatformDeviceAction): AppPlatformDeviceState
{
    switch (action.type)
    {
        case AppPlatformDeviceActions.INIT_INFOS:
            return {
                infos: {
                    appVersion: action.payload.appVersion,
                    appBuild: action.payload.appBuild,
                    manufacturer: action.payload.manufacturer,
                    model: action.payload.model,
                    uuid: action.payload.uuid,
                    serial: action.payload.serial,
                    os: action.payload.os,
                    version: action.payload.version,
                    platform: action.payload.platform,
                    integration: action.payload.integration,
                    virtual: action.payload.virtual,
                    width: action.payload.width,
                    height: action.payload.height,
                    freeDiskSpace: action.payload.freeDiskSpace,
                    totalDiskSpace: action.payload.totalDiskSpace,
                    memoryUsage: action.payload.memoryUsage
                }
            };
    }

    return state;
}
