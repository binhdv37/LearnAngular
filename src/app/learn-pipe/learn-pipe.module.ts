import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LearnPipeRoutingModule } from './learn-pipe-routing.module';
import { LearnPipeComponent } from './learn-pipe.component';
import { ExponentialPowerPipe } from './pipe/exponential-power.pipe';


@NgModule({
  declarations: [LearnPipeComponent, ExponentialPowerPipe],
  imports: [
    CommonModule,
    LearnPipeRoutingModule
  ]
})
export class LearnPipeModule { }
