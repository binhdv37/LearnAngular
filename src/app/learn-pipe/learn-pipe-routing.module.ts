import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LearnPipeComponent } from './learn-pipe.component';
import {PowerBoostCalculateComponent} from './component/power-boost-calculate/power-boost-calculate.component';
import {FlyingHeroesComponent} from './component/flying-heroes/flying-heroes.component';
import {PropertyBindingComponent} from './component/property-binding/property-binding.component';

const routes: Routes = [
  { path: '', component: LearnPipeComponent },
  { path: 'powerBoostCalculate', component: PowerBoostCalculateComponent },
  { path: 'flyingHeroes', component: FlyingHeroesComponent },
  { path: 'propertyBinding', component: PropertyBindingComponent}
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LearnPipeRoutingModule { }
