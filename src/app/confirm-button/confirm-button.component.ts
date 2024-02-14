import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SubscriptionService } from '../subscription.service';

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
    this._subscriptionService.isSubscribed$.next(true);
    this._subscriptionService.isSubscribed$.complete();
  }

  constructor(private _subscriptionService: SubscriptionService) { }
}
