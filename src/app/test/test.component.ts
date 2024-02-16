import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PlanSelectionComponent } from '../plan-selection/plan-selection.component';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { AddOnComponent } from '../add-on/add-on.component';
import { PersonalInfoComponent } from '../personal-info/personal-info.component';
import { StepperComponent } from '../stepper/stepper.component';
import { SummaryComponent } from '../summary/summary.component';

/**
 * This component is used for manual testing of other components.
 */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CdkStepperModule,
    StepperComponent,
    PersonalInfoComponent,
    PlanSelectionComponent,
    AddOnComponent,
    SummaryComponent,
  ],
  templateUrl: './test.component.html',
  styleUrl: '../app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestComponent {

}
