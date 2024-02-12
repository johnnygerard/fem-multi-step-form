import { AdvancedSvgComponent } from "../svg/advanced-svg.component";
import { ArcadeSvgComponent } from "../svg/arcade-svg.component";
import { ProSvgComponent } from "../svg/pro-svg.component";
import { Plan } from "../types/plan.type";

export const plans: Plan[] = [
  {
    icon: ArcadeSvgComponent,
    name: 'Arcade',
    monthlyPrice: 9,
  },
  {
    icon: AdvancedSvgComponent,
    name: 'Advanced',
    monthlyPrice: 12,
  },
  {
    icon: ProSvgComponent,
    name: 'Pro',
    monthlyPrice: 15,
  },
].map(({ icon, name, monthlyPrice }) => ({
  icon,
  name,
  monthlyPrice,
  yearlyPrice: monthlyPrice * 10, // 2 months free
}));
