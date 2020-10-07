import { Component } from '@angular/core';

@Component({
  selector: 'flipper, [flipper]',
  templateUrl: './flipper.component.html',
  styleUrls: ['./flipper.component.scss'],
})
export class FlipperComponent
{
  flipped: boolean = false;

  public flip()
  {
    this.flipped = !this.flipped;
  }
}
