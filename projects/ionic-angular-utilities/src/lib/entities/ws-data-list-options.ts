import { Observable } from 'rxjs';

import { WsDataOptions } from './ws-data-options';

export interface WsDataListOptions extends WsDataOptions {
    data$: Observable<any>;
    dataItemTemplate: any;
    emptyListCondition: boolean | Observable<boolean>;
    emptyListMessage: string;
}