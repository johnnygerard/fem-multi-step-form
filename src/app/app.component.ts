import { CdkStepperModule } from '@angular/cdk/stepper';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { addOns } from './data/add-on.array';
import { plans } from './data/plan.array';
import { StepperComponent } from './stepper/stepper.component';
import { AddOn } from './types/add-on.class';
import { Plan } from './types/plan.class';
import { PricePipe } from './price.pipe';
import { Price } from './types/price.type';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    CdkStepperModule,
    ReactiveFormsModule,
    StepperComponent,
    PricePipe,
    TitleCasePipe,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  readonly PLUS = '+';
  billingCycleIsMonthly = true;
  addOns: AddOn[] = addOns;
  selectedAddOns: AddOn[] = [];
  plans: Plan[] = plans;
  totalPrice: Price = {
    monthly: 0,
    yearly: 0,
  };

  credentialControls = this._formBuilder.group({
    name: ['', Validators.required],
    email: ['', Validators.compose([
      Validators.required,
      Validators.email,
    ])],
    phone: ['', Validators.required],
  });

  planControls = this._formBuilder.group({
    plan: [null as Plan | null, Validators.required],
    billingCycleIsMonthly: this.billingCycleIsMonthly,
  });

  constructor(private _formBuilder: FormBuilder) {
    // Update billing cycle on change
    this.planControls.controls.billingCycleIsMonthly.valueChanges.subscribe(
      (value: boolean | null) => {
        if (value !== null) this.billingCycleIsMonthly = value;
      }
    );

    // Update total price on plan selection
    this.planControls.controls.plan.valueChanges.subscribe(
      (plan: Plan | null) => {
        if (plan) this.totalPrice = this.#computeTotalPrice();
      }
    );
  }

  toggleAddOn(addOn: AddOn): void {
    addOn.selected = !addOn.selected;

    // Recompute selected add-ons while preserving the order
    this.selectedAddOns = this.addOns.filter(addOn => addOn.selected);

    // Recompute the total price
    this.totalPrice = this.#computeTotalPrice();
  }

  #computeTotalPrice(): Price {
    const plan = this.planControls.controls.plan.value as Plan;
    const monthlyTotalPrice = this.selectedAddOns.reduce(
      (sum, selectedAddOn) => sum + selectedAddOn.price.monthly,
      plan.price.monthly
    );

    return {
      monthly: monthlyTotalPrice,
      yearly: monthlyTotalPrice * 10, // 2 months free
    };
  }

  setBillingCycle(isMonthly: boolean): void {
    this.planControls.controls.billingCycleIsMonthly.setValue(isMonthly);
  }
}
