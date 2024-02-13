import { Pipe, PipeTransform } from '@angular/core';
import { Price } from './types/price.type';

@Pipe({
  name: 'price',
  standalone: true
})
export class PricePipe implements PipeTransform {
  transform(price: Price, billingCycleIsMonthly: boolean, plusSign: '+' | '' = ''): string {
    const CURRENCY_SYMBOL = '$';
    const suffix = billingCycleIsMonthly ? 'mo' : 'yr';
    const key = billingCycleIsMonthly ? 'monthly' : 'yearly';

    return `${plusSign}${CURRENCY_SYMBOL}${price[key]}/${suffix}`;
  }
}
