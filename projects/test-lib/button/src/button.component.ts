import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TranslatePipe } from 'test-lib/i18n';

@Component({
  selector: 'm-button',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input() label = 'Click me';
}
