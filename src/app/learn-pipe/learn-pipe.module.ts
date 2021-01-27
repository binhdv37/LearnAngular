import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LearnPipeRoutingModule } from './learn-pipe-routing.module';
import { LearnPipeComponent } from './learn-pipe.component';
import { ExponentialPowerPipe } from './pipe/exponential-power.pipe';
import { PowerBoostCalculateComponent } from './component/power-boost-calculate/power-boost-calculate.component';
import {FormsModule} from '@angular/forms';
import { Con1Component } from './component/con1/con1.component';
import { MultiChildComponent } from './component/multi-child/multi-child.component';
import { Con2Component } from './component/con2/con2.component';
import { MultiChild2Component } from './component/multi-child2/multi-child2.component';
import { ChungComponent } from './component/chung/chung.component';
import { FlyingHerosPipe } from './pipe/flying-heros.pipe';
import { FlyingHeroesComponent } from './component/flying-heroes/flying-heroes.component';
import { PropertyBindingComponent } from './component/property-binding/property-binding.component';


@NgModule({
  declarations: [LearnPipeComponent, ExponentialPowerPipe, PowerBoostCalculateComponent, Con1Component, MultiChildComponent, Con2Component, MultiChild2Component, ChungComponent, FlyingHerosPipe, FlyingHeroesComponent, PropertyBindingComponent],
  imports: [
    CommonModule,
    LearnPipeRoutingModule,
    FormsModule
  ]
})
export class LearnPipeModule { }
