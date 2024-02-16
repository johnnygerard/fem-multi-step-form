import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, combineLatestWith, map } from 'rxjs';
import { Plan } from '../types/plan.class';
import { AddOn } from '../types/add-on.class';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {
  isSubscribed$ = new BehaviorSubject(false);
  isMonthlyBilling$ = new BehaviorSubject(true);
  plan$ = new BehaviorSubject<Plan | null>(null);
  selectedAddOns$ = new BehaviorSubject<AddOn[]>([]);
  totalPrice$: Observable<number> = this.isMonthlyBilling$.pipe(
    combineLatestWith(this.plan$, this.selectedAddOns$),
    map(([isMonthly, plan, addOns]) => {
      const initialSum = plan?.price.getValue(isMonthly) ?? 0;

      return addOns.reduce(
        (sum, addOn) => sum + addOn.price.getValue(isMonthly),
        initialSum
      );
    }),
  );
}
