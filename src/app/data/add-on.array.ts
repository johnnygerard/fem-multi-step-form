import { AddOn } from "../types/add-on.class";
import { Price } from "../types/price.class";

export const addOns: AddOn[] = [
  new AddOn('Online service', 'Access to multiplayer games', new Price(1)),
  new AddOn('Larger storage', 'Extra 1TB of cloud save', new Price(2)),
  new AddOn('Customizable profile', 'Custom theme on your profile', new Price(2)),
];
