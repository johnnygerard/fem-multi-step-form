import { Injectable } from '@angular/core';
import { Plan } from './types/plan.type';
import { BillingCycle } from './types/billing-cycle.type';
import { addOns } from './data/add-on.array';
import { AddOn } from './types/add-on.type';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  name = '';
  email = '';
  phone = '';
  plan?: Plan;
  billingCycle: BillingCycle = 'monthly';
  readonly addOns: AddOn[] = addOns;
}
