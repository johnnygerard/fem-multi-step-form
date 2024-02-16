import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SubscriptionService } from '../../subscription.service';

@Component({
  selector: 'app-confirm-button',
  standalone: true,
  imports: [],
  template: `
    <button class="g-flat-button" type="button" (click)="subscribe()">
      Confirm
    </button>
  `,
  styleUrl: './confirm-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfirmButtonComponent {
  subscribe(): void {
    this._subService.isSubscribed$.next(true);
    this._subService.isSubscribed$.complete();
  }

  constructor(private _subService: SubscriptionService) { }
}
