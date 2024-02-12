import { AdvancedSvgComponent } from "../svg/advanced-svg.component";
import { ArcadeSvgComponent } from "../svg/arcade-svg.component";
import { ProSvgComponent } from "../svg/pro-svg.component";
import { Plan } from "../types/plan.class";

export const plans: Plan[] = [
  new Plan('Arcade', 9, ArcadeSvgComponent),
  new Plan('Advanced', 12, AdvancedSvgComponent),
  new Plan('Pro', 15, ProSvgComponent),
];
