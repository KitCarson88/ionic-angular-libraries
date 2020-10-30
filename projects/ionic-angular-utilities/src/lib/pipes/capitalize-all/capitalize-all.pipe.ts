import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizeAll',
})
export class CapitalizeAllPipe implements PipeTransform
{
  transform(value: string)
  {
    if (value)
    {
      let ret = value;
      for (let i = ret.length - 1; i >= 1; --i)
      {
        if (ret.charAt(i-1) == ' ')
          ret = this.replaceAt(ret, i, ret.charAt(i).toUpperCase());
      }

      return this.replaceAt(ret, 0, ret.charAt(0).toUpperCase());
    }

    return null;
  }

  private replaceAt(str: string, index: number, replacement: string) {
    return str.substr(0, index) + replacement + str.substr(index + replacement.length);
  }
}
