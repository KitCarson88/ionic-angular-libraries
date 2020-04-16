import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'error-container',
  templateUrl: './error-container.component.html',
  styleUrls: ['./error-container.component.scss'],
})
export class ErrorContainerComponent
{
  @Input()
  message?: string;

  @Input()
  retryButtonLabel?: string;
  
  @Output()
  reload = new EventEmitter();
}
