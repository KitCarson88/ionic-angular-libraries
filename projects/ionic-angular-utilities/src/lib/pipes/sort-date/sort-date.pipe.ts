import { Pipe, PipeTransform } from '@angular/core';

import * as moment from 'moment';

@Pipe({
  name: 'sortDate'
})
export class SortDatePipe implements PipeTransform
{
  transform(value: unknown, ...args: unknown[]): any
  {
    let granularity;

    for (let i = 0; i < args.length; ++i)
      if (args[i] != 'desc')
      {
        granularity = args[i];
        break;
      }

    if (args[0] === 'desc')
      return (value as string[]).sort((a, b) => {
        let aDate = moment(a);
        let bDate = moment(b);

        if (bDate.isBefore(aDate, granularity))
          return -1;
        else if (bDate.isSame(aDate, granularity))
          return 0;
        else if (bDate.isAfter(aDate, granularity))
          return 1;
      });
    else
      return (value as string[]).sort((a, b) => {
        let aDate = moment(a);
        let bDate = moment(b);

        if (aDate.isBefore(bDate, granularity))
          return -1;
        else if (aDate.isSame(bDate, granularity))
          return 0;
        else if (aDate.isAfter(bDate, granularity))
          return 1;
      });
  }
}
