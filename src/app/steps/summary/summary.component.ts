import { AsyncPipe, CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { HeadingComponent } from '../../heading/heading.component';
import { BackButtonComponent } from '../../buttons/back-button/back-button.component';
import { ConfirmButtonComponent } from '../../buttons/confirm-button/confirm-button.component';
import { PricePipe } from '../../price.pipe';
import { SubscriptionService } from '../../subscription.service';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [
    CommonModule,
    HeadingComponent,
    BackButtonComponent,
    ConfirmButtonComponent,
    AsyncPipe,
    PricePipe,
  ],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SummaryComponent {
  readonly HEADING = 'Finishing up';
  readonly SUBHEADING = 'Double-check everything looks OK before confirming.';
  @Output() changePlan = new EventEmitter<void>;
  isMonthlyBilling = this._subService.isMonthlyBilling$.value;
  plan$ = this._subService.plan$;
  selectedAddOns$ = this._subService.selectedAddOns$;
  totalPrice$ = this._subService.totalPrice$;

  constructor(private _subService: SubscriptionService) {
    _subService.isMonthlyBilling$.subscribe(
      value => this.isMonthlyBilling = value
    );
  }
}
