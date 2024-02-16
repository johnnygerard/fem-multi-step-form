import { AdvancedSvgComponent } from "../app/svg/advanced-svg.component";
import { ArcadeSvgComponent } from "../app/svg/arcade-svg.component";
import { ProSvgComponent } from "../app/svg/pro-svg.component";

export type Icon =
  | typeof ArcadeSvgComponent
  | typeof AdvancedSvgComponent
  | typeof ProSvgComponent;
