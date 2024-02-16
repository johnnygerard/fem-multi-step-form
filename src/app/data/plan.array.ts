import { AdvancedSvgComponent } from "../svg/advanced-svg.component";
import { ArcadeSvgComponent } from "../svg/arcade-svg.component";
import { ProSvgComponent } from "../svg/pro-svg.component";
import { Plan } from "../types/plan.class";
import { Price } from "../types/price.class";

export const plans: Plan[] = [
  new Plan('Arcade', ArcadeSvgComponent, new Price(9)),
  new Plan('Advanced', AdvancedSvgComponent, new Price(12)),
  new Plan('Pro', ProSvgComponent, new Price(15)),
];
