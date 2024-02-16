import { AsyncPipe, CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeadingComponent } from '../heading/heading.component';
import { BackButtonComponent } from '../buttons/back-button/back-button.component';
import { NextButtonComponent } from '../buttons/next-button/next-button.component';
import { PricePipe } from '../price.pipe';
import { AddOn } from '../../types/add-on.class';
import { addOns } from '../../data/add-on.array';
import { SubscriptionService } from '../subscription.service';
import { FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-on',
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
  templateUrl: './add-on.component.html',
  styleUrl: './add-on.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddOnComponent {
  readonly HEADING = 'Pick add-ons';
  readonly SUBHEADING = 'Add-ons help enhance your gaming experience.';
  isMonthlyBilling$ = this._subService.isMonthlyBilling$;
  addOns: AddOn[] = addOns;
  formGroup = this._formBuilder.group({
    addOnControls: this._formBuilder.array(
      addOns.map(_ => new FormControl(false))
    )
  });

  constructor(
    private _formBuilder: FormBuilder,
    private _subService: SubscriptionService,
  ) {
    this.addOnControls.valueChanges.subscribe(
      addOnsAreSelected => {
        this._subService.selectedAddOns$.next(
          addOns.filter((_addOn, index) => addOnsAreSelected[index])
        );
      }
    );
  }

  get addOnControls() {
    return this.formGroup.controls.addOnControls;
  }
}
