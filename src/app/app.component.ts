import { CdkStepperModule } from '@angular/cdk/stepper';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { addOns } from './data/add-on.array';
import { plans } from './data/plan.array';
import { StepperComponent } from './stepper/stepper.component';
import { AddOn } from './types/add-on.class';
import { Plan } from './types/plan.class';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    CdkStepperModule,
    ReactiveFormsModule,
    StepperComponent,
    TitleCasePipe,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
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
    billingCycleIsMonthly: true,
  });

  constructor(private _formBuilder: FormBuilder) { }

  get billingCycleIsMonthly(): boolean | null {
    return this.planControls.controls.billingCycleIsMonthly.value;
  }

  get selectedAddOns(): AddOn[] {
    return this.addOns.filter(addOn => addOn.selected);
  }

  get totalPrice(): number {
    return this.billingCycleIsMonthly
      ? this.totalMonthlyPrice
      : this.totalYearlyPrice;
  }

  get totalMonthlyPrice(): number {
    const planPrice = this.planControls.controls.plan.value?.monthlyPrice ?? 0;

    return this.selectedAddOns.reduce(
      (sum, addOn) => sum + addOn.monthlyPrice, planPrice
    );
  }

  get totalYearlyPrice(): number {
    return this.totalMonthlyPrice * 10; // 2 months free
  }

  toggleAddOn(addOn: AddOn): void {
    addOn.selected = !addOn.selected;
  }

  setBillingCycle(isMonthly: boolean): void {
    this.planControls.controls.billingCycleIsMonthly.setValue(isMonthly);
  }
}
