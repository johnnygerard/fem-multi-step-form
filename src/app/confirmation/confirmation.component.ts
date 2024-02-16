import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CheckSvgComponent } from '../svg/check-svg.component';

@Component({
  selector: 'app-confirmation',
  standalone: true,
  imports: [
    CheckSvgComponent,
  ],
  templateUrl: './confirmation.component.html',
  styleUrl: './confirmation.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfirmationComponent {

}
