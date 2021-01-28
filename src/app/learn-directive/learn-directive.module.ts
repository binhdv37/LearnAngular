import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LearnDirectiveRoutingModule } from './learn-directive-routing.module';
import { LearnDirectiveComponent } from './learn-directive.component';
import { BuildInComponent } from './component/build-in/build-in.component';
import {FormsModule} from '@angular/forms';
import { TrackByComponent } from './component/track-by/track-by.component';
import { LearnNgSwitchComponent } from './component/learn-ng-switch/learn-ng-switch.component';
import { AComponent } from './component/a/a.component';
import { BComponent } from './component/b/b.component';
import { CComponent } from './component/c/c.component';
import { DefaultComponent } from './component/default/default.component';


@NgModule({
  declarations: [LearnDirectiveComponent, BuildInComponent, TrackByComponent, LearnNgSwitchComponent, AComponent, BComponent, CComponent, DefaultComponent],
  imports: [
    CommonModule,
    LearnDirectiveRoutingModule,
    FormsModule
  ]
})
export class LearnDirectiveModule { }
