import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CdkStepper, CdkStepperModule } from '@angular/cdk/stepper';
import { AsyncPipe, CommonModule } from '@angular/common';
import { SubscriptionService } from '../subscription.service';
import { ConfirmationComponent } from '../confirmation/confirmation.component';

@Component({
  selector: 'app-stepper',
  standalone: true,
  imports: [
    CommonModule,
    CdkStepperModule,
    ConfirmationComponent,
    AsyncPipe,
  ],
  providers: [
    { provide: CdkStepper, useExisting: StepperComponent }
  ],
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StepperComponent extends CdkStepper {
  isSubscribed$ = inject(SubscriptionService).isSubscribed$;
}
