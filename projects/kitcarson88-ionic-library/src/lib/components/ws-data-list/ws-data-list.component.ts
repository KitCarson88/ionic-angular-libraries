import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Observable } from 'rxjs';

@Component({
  selector: 'ws-data-list',
  templateUrl: './ws-data-list.component.html',
  styleUrls: ['./ws-data-list.component.scss'],
})
export class WsDataListComponent
{
  @Input('loading')
  loading$: Observable<boolean>;
  

  @Input('error')
  error$: Observable<boolean>;

  @Input()
  errorMessage?: string;

  @Input()
  retryButtonLabel?: string;

  @Output()
  retryButtonClick? = new EventEmitter();

  
  @Input('data')
  data$: Observable<any>;

  @Input()
  dataItemTemplate;

  @Input()
  emptyListErrorMessage?: string;
}
