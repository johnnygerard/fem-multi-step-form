import { Price } from "./price.type";

export class AddOn {
  readonly price: Price;
  selected = false;

  constructor(
    readonly name: string,
    readonly description: string,
    monthlyPrice: number,
  ) {
    this.price = {
      monthly: monthlyPrice,
      yearly: monthlyPrice * 10, // 2 months free
    };
  }
}
