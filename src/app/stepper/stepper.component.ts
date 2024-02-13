import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CdkStepper, CdkStepperModule } from '@angular/cdk/stepper';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stepper',
  standalone: true,
  imports: [
    CommonModule,
    CdkStepperModule,
  ],
  providers: [
    { provide: CdkStepper, useExisting: StepperComponent }
  ],
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StepperComponent extends CdkStepper { }
