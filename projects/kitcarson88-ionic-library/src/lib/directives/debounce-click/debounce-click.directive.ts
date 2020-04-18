import { Directive, Input, Output, EventEmitter, OnInit, OnDestroy, HostListener } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Directive({
  selector: '[debounceClick]'
})
export class DebounceClickDirective implements OnInit, OnDestroy
{
  @Input()
  debounceTime = 500;

  @Output()
  debounceClick = new EventEmitter();

  private clicks = new Subject();
  private subscription: Subscription;

  constructor() { }

  ngOnInit()
  {
    this.subscription = this.clicks.pipe(debounceTime(this.debounceTime))
      .subscribe(event => this.debounceClick.emit(event));
  }

  ngOnDestroy()
  {
    this.subscription.unsubscribe();
  }

  @HostListener("click", ["$event"])
  clickEvent(event)
  {
    event.preventDefault();
    event.stopPropagation();
    this.clicks.next(event);
  }
}
