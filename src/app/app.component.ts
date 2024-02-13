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
  plans: Plan[] = plans;

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
    this.planControls.controls.billingCycleIsMonthly.valueChanges.subscribe(
      (value: boolean | null) => {
        if (value !== null) this.billingCycleIsMonthly = value;
      }
    );
  }

  get selectedAddOns(): AddOn[] {
    return this.addOns.filter(addOn => addOn.selected);
  }

  get totalPrice(): Price {
    const planPrice = this.planControls.controls.plan.value?.price.monthly ?? 0;
    const totalMonthlyPrice = this.selectedAddOns.reduce(
      (sum, addOn) => sum + addOn.price.monthly, planPrice
    );

    return {
      monthly: totalMonthlyPrice,
      yearly: totalMonthlyPrice * 10, // 2 months free
    };
  }

  toggleAddOn(addOn: AddOn): void {
    addOn.selected = !addOn.selected;
  }

  setBillingCycle(isMonthly: boolean): void {
    this.planControls.controls.billingCycleIsMonthly.setValue(isMonthly);
  }
}
