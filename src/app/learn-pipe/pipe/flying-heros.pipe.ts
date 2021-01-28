import { Pipe, PipeTransform } from '@angular/core';
import {Hero} from '../models/hero';

@Pipe({
  name: 'flyingHeros',
})
export class FlyingHerosPipe implements PipeTransform {

  // all hero who can fly
  transform(allHeroes: Hero[]) {
    return allHeroes.filter(x => x.canFly);
  }

}
