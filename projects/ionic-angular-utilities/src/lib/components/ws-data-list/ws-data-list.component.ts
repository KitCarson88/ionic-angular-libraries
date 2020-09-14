import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

import { WsDataListOptions } from '../../entities/ws-data-list-options';

@Component({
  selector: 'ws-data-list',
  templateUrl: './ws-data-list.component.html',
  styleUrls: ['./ws-data-list.component.scss'],
})
export class WsDataListComponent implements OnInit
{
  @Input()
  options?: WsDataListOptions;

  @Output()
  retry? = new EventEmitter();

  dataAvailableCondition$: Observable<boolean>;

  ngOnInit()
  {
    this.dataAvailableCondition$ = (typeof this.options.dataAvailableCondition === 'boolean') ? of(this.options.dataAvailableCondition) : this.options.dataAvailableCondition;
  }
}
