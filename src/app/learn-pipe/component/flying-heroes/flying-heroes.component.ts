import { Component, OnInit } from '@angular/core';
import {Hero} from '../../models/hero';

@Component({
  selector: 'app-flying-heroes',
  templateUrl: './flying-heroes.component.html',
  styleUrls: ['./flying-heroes.component.css']
})
export class FlyingHeroesComponent implements OnInit {
  heroes: Hero[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.heroes.push(new Hero('iron man', 'rich', true));
    this.heroes.push(new Hero('sprider man', 'fast', false));
    this.heroes.push(new Hero('captain', 'strong', false));
    this.heroes.push(new Hero('thor', 'fun', true));
  }

  addHero(name, power, canFly){
    this.heroes.push(new Hero(name, power, canFly));
    console.log(this.heroes);
  }

}
