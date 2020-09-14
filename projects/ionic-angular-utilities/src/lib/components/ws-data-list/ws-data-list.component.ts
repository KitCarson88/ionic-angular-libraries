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

  emptyListCondition$: Observable<boolean>;

  ngOnInit()
  {
    this.emptyListCondition$ = (typeof this.options.emptyListCondition === 'boolean') ? of(this.options.emptyListCondition) : this.options.emptyListCondition;
  }
}
