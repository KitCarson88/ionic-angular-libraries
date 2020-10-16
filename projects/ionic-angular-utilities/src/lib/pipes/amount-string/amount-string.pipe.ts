import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'amount'
})
export class AmountStringPipe implements PipeTransform
{
  transform(value: unknown, ...args: unknown[]): string
  {
    let amount = value as number | string;
    amount = (+amount).toFixed(2);
    amount = amount.replace('.', ',');

    return amount;
  }
}
