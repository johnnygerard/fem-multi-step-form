import { CdkStepperModule } from '@angular/cdk/stepper';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AddOnComponent } from './steps/add-on/add-on.component';
import { PersonalInfoComponent } from './steps/personal-info/personal-info.component';
import { PlanSelectionComponent } from './steps/plan-selection/plan-selection.component';
import { StepperComponent } from './stepper/stepper.component';
import { SummaryComponent } from './steps/summary/summary.component';

@Component({
  selector: 'app-root',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CdkStepperModule,
    StepperComponent,
    PersonalInfoComponent,
    PlanSelectionComponent,
    AddOnComponent,
    SummaryComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent { }
