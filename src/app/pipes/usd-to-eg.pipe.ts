import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usdToEg'
})
export class UsdToEgPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
