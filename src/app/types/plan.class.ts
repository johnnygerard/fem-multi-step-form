import { Icon } from "./plan-icon.type";
import { Price } from "./price.class";

export class Plan {
  constructor(
    readonly name: string,
    readonly icon: Icon,
    readonly price: Price,
  ) { }
}
