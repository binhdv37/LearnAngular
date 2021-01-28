import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LearnDirectiveComponent } from './learn-directive.component';
import {BuildInComponent} from './component/build-in/build-in.component';
import {TrackByComponent} from './component/track-by/track-by.component';
import {LearnNgSwitchComponent} from './component/learn-ng-switch/learn-ng-switch.component';

const routes: Routes = [{
  path: '', component: LearnDirectiveComponent,
  children: [
    {path: 'buildin', component: BuildInComponent},
    { path: 'trackBy', component: TrackByComponent},
    { path: 'ngSwitch', component: LearnNgSwitchComponent},
  ]
}
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LearnDirectiveRoutingModule { }
