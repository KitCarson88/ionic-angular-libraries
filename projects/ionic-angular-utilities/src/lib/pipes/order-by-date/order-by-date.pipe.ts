import { Pipe, PipeTransform } from '@angular/core';

import * as moment from 'moment';

@Pipe({
  name: 'orderByDate'
})
export class OrderByDatePipe implements PipeTransform
{
  transform(value: unknown, ...args: unknown[]): any
  {
    let field = args[0] as string;
    
    let desc = args.length == 2 && args[1] === 'desc' || args.length == 3 && args[2] === 'desc';

    let granularity = args.length == 3 ? args[1] as moment.unitOfTime.StartOf : undefined;

    //console.log("VALUE: ", value);
    //console.log("ARGS: ", args);

    if (desc)
      return (value as any[]).sort((a, b) => {
        let aDate = moment(a[field]);
        let bDate = moment(b[field]);

        if (bDate.isBefore(aDate, granularity))
          return -1;
        if (bDate.isSame(aDate, granularity))
          return 0;
        if (bDate.isAfter(aDate, granularity))
          return 1;
      });
    else
      return (value as any[]).sort((a, b) => {
        let aDate = moment(a[field]);
        let bDate = moment(b[field]);

        if (aDate.isBefore(bDate, granularity))
          return -1;
        if (aDate.isSame(bDate, granularity))
          return 0;
        if (aDate.isAfter(bDate, granularity))
          return 1;
      });
  }
}
