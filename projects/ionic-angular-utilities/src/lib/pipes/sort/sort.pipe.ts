import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform
{
  transform(value: unknown, ...args: unknown[]): any
  {
    let sorted = [...(value as any[])];
    sorted.sort();
    if (args[0] === 'desc')
      sorted.reverse();

    return sorted;
  }
}
