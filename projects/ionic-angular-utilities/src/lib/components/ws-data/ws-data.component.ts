import { Component, Input, Output, EventEmitter } from '@angular/core';

import { WsDataOptions } from '../../entities/ws-data-options';

@Component({
  selector: 'ws-data',
  templateUrl: './ws-data.component.html',
  styleUrls: ['./ws-data.component.scss'],
})
export class WsDataComponent
{
  @Input()
  options?: WsDataOptions;

  @Output()
  retry? = new EventEmitter();
}
