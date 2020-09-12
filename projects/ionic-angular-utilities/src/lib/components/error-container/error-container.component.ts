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

  @Input('retryButtonLabel')
  buttonLabel?: string;

  @Input('retryButtonFill')
  buttonFill?: 'clear' | 'outline' | 'solid';

  @Input('retryButtonShape')
  buttonShape?: 'round';

  @Input('retryButtonColor')
  buttonColor?: string;
  
  @Output()
  reload = new EventEmitter();
}
