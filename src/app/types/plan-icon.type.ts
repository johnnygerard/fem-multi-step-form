import { AdvancedSvgComponent } from "../svg/advanced-svg.component";
import { ArcadeSvgComponent } from "../svg/arcade-svg.component";
import { ProSvgComponent } from "../svg/pro-svg.component";

export type Icon =
  | typeof ArcadeSvgComponent
  | typeof AdvancedSvgComponent
  | typeof ProSvgComponent;
