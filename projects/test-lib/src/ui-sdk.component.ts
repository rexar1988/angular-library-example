import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'm-2ui-sdk',
  standalone: true,
  imports: [],
  template: `
    <p>ui-sdk works!</p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiSdkComponent {}
