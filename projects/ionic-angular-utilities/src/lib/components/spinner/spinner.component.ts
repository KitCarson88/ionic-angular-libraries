import { Component, Input } from '@angular/core';

@Component({
  selector: 'spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent
{
  @Input()
  withContainer?: boolean;

  @Input()
  name?: 'rotatingSquare' | 'chasingDot' | 'doubleBouncingDot' | 'stretchingBars' | 'chasingSquares' | 'scalingDot' | 'doubleRotatingDot' | 'threeBouncingDots' | 'rotatingDotCircle' | 'fadingSquare' | 'simpleSpinner' | 'foldingSquare';
}
