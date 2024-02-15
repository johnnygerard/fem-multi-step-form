import { AsyncPipe, CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { BackButtonComponent } from '../back-button/back-button.component';
import { plans } from '../data/plan.array';
import { HeadingComponent } from '../heading/heading.component';
import { NextButtonComponent } from '../next-button/next-button.component';
import { PricePipe } from '../price.pipe';
import { SubscriptionService } from '../subscription.service';
import { Plan } from '../types/plan.class';

@Component({
  selector: 'app-plan-selection',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HeadingComponent,
    BackButtonComponent,
    NextButtonComponent,
    AsyncPipe,
    PricePipe,
  ],
  templateUrl: './plan-selection.component.html',
  styleUrl: './plan-selection.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlanSelectionComponent {
  readonly HEADING = 'Select your plan';
  readonly SUBHEADING = 'You have the option of monthly or yearly billing.';
  isMonthlyBilling = this._subService.isMonthlyBilling$.value;
  plans: Plan[] = plans;

  formGroup = inject(FormBuilder).group({
    plan: [this._subService.plan$.value, Validators.required],
    billingCycle: this.isMonthlyBilling,
  })

  constructor(private _subService: SubscriptionService) {
    this.formGroup.controls.plan.valueChanges.subscribe(
      value => _subService.plan$.next(value)
    );

    this.billingCycleControl.valueChanges.subscribe(
      value => {
        this.isMonthlyBilling = value!;
        _subService.isMonthlyBilling$.next(value!);
      }
    );
  }

  get billingCycleControl(): FormControl<boolean | null> {
    return this.formGroup.controls.billingCycle;
  }
}
