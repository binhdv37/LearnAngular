import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LearnPipeComponent } from './learn-pipe.component';
import {PowerBoostCalculateComponent} from './component/power-boost-calculate/power-boost-calculate.component';

const routes: Routes = [
  { path: '', component: LearnPipeComponent },
  { path: 'powerBoostCalculate', component: PowerBoostCalculateComponent }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LearnPipeRoutingModule { }
