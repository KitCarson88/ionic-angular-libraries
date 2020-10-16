import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform
{
  transform(value: unknown, ...args: unknown[]): any
  {
    let field = args[0] as string;
    let desc: boolean = args[1] && args[1] === 'desc';

    let sorted = [...(value as any[])];
    sorted.sort((a, b) => {
      if (a[field] < b[field])
        return -1;
      else if (a[field] > b[field])
        return 1;

      return 0;
    });

    if (desc)
      sorted.reverse();

    return sorted;
  }
}
