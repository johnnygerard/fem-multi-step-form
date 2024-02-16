import { Pipe, PipeTransform } from '@angular/core';
import { Price } from '../types/price.class';

@Pipe({
  name: 'price',
  standalone: true
})
export class PricePipe implements PipeTransform {
  readonly CURRENCY_SYMBOL = '$';

  transform(price: Price | number, isMonthly: boolean, plusSign: '+' | '' = ''): string {
    const suffix = isMonthly ? 'mo' : 'yr';

    if (typeof price !== 'number')
      price = price.getValue(isMonthly);

    return `${plusSign}${this.CURRENCY_SYMBOL}${price}/${suffix}`;
  }
}
