import { CdkStepperNext } from '@angular/cdk/stepper';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-next-button',
  standalone: true,
  imports: [
    CdkStepperNext,
  ],
  template: `
    <button class="g-flat-button" data-test="next-button" cdkStepperNext>
      Next Step
    </button>
  `,
  styleUrl: './next-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NextButtonComponent {

}
