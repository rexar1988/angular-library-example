import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'translate',
  standalone: true,
})
export class TranslatePipe implements PipeTransform {
  transform(value: string): unknown {
    return `${value} (translated)`;
  }
}
