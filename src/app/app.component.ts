import { CdkStepperModule } from '@angular/cdk/stepper';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroupDirective, ReactiveFormsModule, Validators } from '@angular/forms';
import { addOns } from './data/add-on.array';
import { plans } from './data/plan.array';
import { PricePipe } from './price.pipe';
import { StepperComponent } from './stepper/stepper.component';
import { AddOn } from './types/add-on.class';
import { Plan } from './types/plan.class';
import { Price } from './types/price.type';
import { headings } from './data/heading.array';
import { NextButtonComponent } from './next-button/next-button.component';
import { BackButtonComponent } from './back-button/back-button.component';
import { ConfirmButtonComponent } from './confirm-button/confirm-button.component';
import { HeadingComponent } from './heading/heading.component';

@Component({
  selector: 'app-root',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    CdkStepperModule,
    ReactiveFormsModule,
    StepperComponent,
    BackButtonComponent,
    NextButtonComponent,
    ConfirmButtonComponent,
    HeadingComponent,
    PricePipe,
    TitleCasePipe,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  readonly PLUS = '+';
  readonly headings = headings;
  isMonthlyBilling = true;
  addOns: AddOn[] = addOns;
  selectedAddOns: AddOn[] = [];
  plans: Plan[] = plans;
  totalPrice: Price = {
    monthly: 0,
    yearly: 0,
  };

  @ViewChild('credentialForm') credentialForm?: FormGroupDirective;

  credentialControls = this._formBuilder.group({
    name: ['', Validators.required],
    email: ['', [
      Validators.required,
      Validators.email,
    ]],
    phone: ['', Validators.required],
  });

  planControls = this._formBuilder.group({
    plan: [null as Plan | null, Validators.required],
    billingCycle: this.isMonthlyBilling,
  });

  constructor(private _formBuilder: FormBuilder) {

    this.#billingControl.valueChanges.subscribe(
      _ => this.isMonthlyBilling = !this.isMonthlyBilling
    );

    this.#planControl.valueChanges.subscribe(_ => this.#recomputeTotalPrice());
  }

  isRequired(control: FormControl): boolean {
    return this.#isErrorDisplayed('required', control);
  }

  isEmailInvalid(control: FormControl): boolean {
    return this.#isErrorDisplayed('email', control);
  }

  #isErrorDisplayed(errorName: string, control: FormControl): boolean {
    const formSubmitted = this.credentialForm?.submitted ?? false;

    return control.hasError(errorName) && (control.touched || formSubmitted);
  }

  get #billingControl(): FormControl<boolean | null> {
    return this.planControls.controls.billingCycle;
  }

  get #planControl(): FormControl<Plan | null> {
    return this.planControls.controls.plan;
  }

  toggleAddOn(addOn: AddOn): void {
    addOn.selected = !addOn.selected;

    // Recompute selected add-ons and total price
    this.selectedAddOns = this.addOns.filter(addOn => addOn.selected);
    this.#recomputeTotalPrice();
  }

  #recomputeTotalPrice(): void {
    const plan = this.#planControl.value as Plan;
    const monthlyTotalPrice = this.selectedAddOns.reduce(
      (sum, selectedAddOn) => sum + selectedAddOn.price.monthly,
      plan.price.monthly
    );

    this.totalPrice = {
      monthly: monthlyTotalPrice,
      yearly: monthlyTotalPrice * 10, // 2 months free
    };
  }

  setBillingCycle(isMonthly: boolean): void {
    this.#billingControl.setValue(isMonthly);
  }
}
