import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exponentialPower'
})
// custom pipe
export class ExponentialPowerPipe implements PipeTransform {
  transform(value: number, exponent?: number): number {
    return Math.pow(value, isNaN(exponent) ? 1 : exponent);
  }
}
