export class Price {
  constructor(
    readonly monthly: number,
    readonly yearly: number = monthly * 10, // 2 months free
  ) { }

  getValue(isMonthly: boolean): number {
    return isMonthly ? this.monthly : this.yearly;
  }
}
