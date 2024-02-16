import { AdvancedSvgComponent } from "../app/svg/advanced-svg.component";
import { ArcadeSvgComponent } from "../app/svg/arcade-svg.component";
import { ProSvgComponent } from "../app/svg/pro-svg.component";
import { Plan } from "../types/plan.class";
import { Price } from "../types/price.class";

export const plans: Plan[] = [
  new Plan('Arcade', ArcadeSvgComponent, new Price(9)),
  new Plan('Advanced', AdvancedSvgComponent, new Price(12)),
  new Plan('Pro', ProSvgComponent, new Price(15)),
];
