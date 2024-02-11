import { AddOn } from "../types/add-on.type";

export const addOns: AddOn[] = [
  {
    name: 'Online service',
    description: 'Access to multiplayer games',
    monthlyPrice: 1,
  },
  {
    name: 'Larger storage',
    description: 'Extra 1TB of cloud save',
    monthlyPrice: 2,
  },
  {
    name: 'Customizable profile',
    description: 'Custom theme on your profile',
    monthlyPrice: 2,
  }
].map(({ name, description, monthlyPrice }) => ({
  name,
  description,
  monthlyPrice,
  yearlyPrice: monthlyPrice * 10, // 2 months free
}));
