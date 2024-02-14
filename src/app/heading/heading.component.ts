import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-heading',
  standalone: true,
  imports: [],
  templateUrl: './heading.component.html',
  styleUrl: './heading.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeadingComponent {
  @Input({ required: true }) heading!: string;
  @Input({ required: true }) subheading!: string;
}
