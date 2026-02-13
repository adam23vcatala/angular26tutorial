import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'invertir',
  standalone: true // A partir de Angular 17
})

export class MiPipePipe implements PipeTransform {
  transform(value: string): string {
    return value.split('').reverse().join('');
  }
}