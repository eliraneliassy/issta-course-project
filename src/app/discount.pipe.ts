import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount'
})
export class DiscountPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if (value > 100) {
      return value * (1 - args[0]);
    } else {
      return value;
    }
  }

}
