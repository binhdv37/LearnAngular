import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LearnPipeComponent } from './learn-pipe.component';

const routes: Routes = [{ path: '', component: LearnPipeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LearnPipeRoutingModule { }
