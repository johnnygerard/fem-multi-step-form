import { Price } from "./price.class";

export class AddOn {
  constructor(
    readonly name: string,
    readonly description: string,
    readonly price: Price,
  ) { }
}
