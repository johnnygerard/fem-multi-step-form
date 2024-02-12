import { AdvancedSvgComponent } from "../svg/advanced-svg.component";
import { ArcadeSvgComponent } from "../svg/arcade-svg.component";
import { ProSvgComponent } from "../svg/pro-svg.component";

export type Plan = {
  readonly name: string;
  readonly monthlyPrice: number;
  readonly yearlyPrice: number;
  readonly icon: Icon;
};

type Icon =
  | typeof ArcadeSvgComponent
  | typeof AdvancedSvgComponent
  | typeof ProSvgComponent;
