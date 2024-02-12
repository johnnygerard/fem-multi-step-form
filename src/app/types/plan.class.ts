import { Icon } from "./plan-icon.type";

export class Plan {
  readonly yearlyPrice = this.monthlyPrice * 10; // 2 months free

  constructor(
    readonly name: string,
    readonly monthlyPrice: number,
    readonly icon: Icon,
  ) {}
}
