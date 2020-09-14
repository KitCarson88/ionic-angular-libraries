import { Observable } from 'rxjs';

import { WsDataOptions } from './ws-data-options';

export interface WsDataListOptions extends WsDataOptions {
    data$: Observable<any>;
    dataItemTemplate: any;
    dataAvailableCondition: boolean | Observable<boolean>;
    emptyListMessage: string;
}