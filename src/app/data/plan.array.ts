import { Plan } from "../types/plan.type";

export const plans: Plan[] = [
  {
    name: 'Arcade',
    monthlyPrice: 9,
  },
  {
    name: 'Advanced',
    monthlyPrice: 12,
  },
  {
    name: 'Pro',
    monthlyPrice: 15,
  },
].map(({ name, monthlyPrice }) => ({
  icon: name.toLowerCase() + '.svg',
  name,
  monthlyPrice,
  yearlyPrice: monthlyPrice * 10, // 2 months free
}));
