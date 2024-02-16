import { CdkStepperPrevious } from '@angular/cdk/stepper';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-back-button',
  standalone: true,
  imports: [
    CdkStepperPrevious,
  ],
  template: `<button class="g-button" type="button" cdkStepperPrevious>Go Back</button>`,
  styleUrl: './back-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BackButtonComponent {

}
