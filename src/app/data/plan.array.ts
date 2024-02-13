import { AdvancedSvgComponent } from "../svg/advanced-svg.component";
import { ArcadeSvgComponent } from "../svg/arcade-svg.component";
import { ProSvgComponent } from "../svg/pro-svg.component";
import { Plan } from "../types/plan.class";

export const plans: Plan[] = [
  new Plan('Arcade', ArcadeSvgComponent, 9),
  new Plan('Advanced', AdvancedSvgComponent, 12),
  new Plan('Pro', ProSvgComponent, 15),
];
