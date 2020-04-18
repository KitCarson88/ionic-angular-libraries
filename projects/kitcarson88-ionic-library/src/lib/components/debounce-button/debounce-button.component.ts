import { Component, Input, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'debounce-button',
  templateUrl: './debounce-button.component.html',
  styleUrls: ['./debounce-button.component.scss'],
  animations: [
    trigger('buttonState', [
      state('wait', style({
        transform: 'scale(1)'
      })),
      state('pressed', style({
        transform: 'scale(1.1)'
      })),
      transition('wait => pressed', animate('150ms ease-in')),
      transition('pressed => wait', animate('150ms ease-out'))
    ])
  ]
})
export class DebounceButtonComponent
{
  @Input()
  cssClass?: string;

  @Input()
  fill?: 'clear' | 'outline' | 'solid';

  @Input()
  disabled?: boolean;

  @Input()
  shape?: 'round';

  @Input()
  debounce?: number;

  @Output()
  debounceClick = new EventEmitter();

  animationState: 'wait' | 'pressed' = 'wait';
  private animationTimeout;

  constructor() { }

  animateButton()
  {
    if (this.animationTimeout)
      clearTimeout(this.animationTimeout);
    this.animationState = 'pressed';

    this.animationTimeout = setTimeout(() =>
    {
      this.animationState = 'wait';
    }, 200);
  }

  onDebounceClick(event)
  {
    this.debounceClick.emit(event);
  }
}
