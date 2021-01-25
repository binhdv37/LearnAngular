import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LearnPipeRoutingModule } from './learn-pipe-routing.module';
import { LearnPipeComponent } from './learn-pipe.component';
import { ExponentialPowerPipe } from './pipe/exponential-power.pipe';
import { PowerBoostCalculateComponent } from './component/power-boost-calculate/power-boost-calculate.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [LearnPipeComponent, ExponentialPowerPipe, PowerBoostCalculateComponent],
  imports: [
    CommonModule,
    LearnPipeRoutingModule,
    FormsModule
  ]
})
export class LearnPipeModule { }
