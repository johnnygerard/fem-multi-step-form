export class AddOn {
  readonly yearlyPrice = this.monthlyPrice * 10; // 2 months free
  selected = false;

  constructor(
    readonly name: string,
    readonly description: string,
    readonly monthlyPrice: number,
  ) { }
}
