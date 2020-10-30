import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform
{
  transform(value: unknown, ...args: unknown[]): any
  {
    let text = value as string;
    return text.charAt(0).toUpperCase() + text.substring(1);
  }
}
