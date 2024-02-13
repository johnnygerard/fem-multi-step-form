import { Icon } from "./plan-icon.type";
import { Price } from "./price.type";

export class Plan {
  readonly price: Price;

  constructor(
    readonly name: string,
    readonly icon: Icon,
    monthlyPrice: number,
    ) {
    this.price = {
      monthly: monthlyPrice,
      yearly: monthlyPrice * 10, // 2 months free
    };
  }
}
