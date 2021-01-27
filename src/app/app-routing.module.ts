import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';
import {PowerBoostCalculateComponent} from './learn-pipe/component/power-boost-calculate/power-boost-calculate.component';
import {Con1Component} from './learn-pipe/component/con1/con1.component';
import {MultiChildComponent} from './learn-pipe/component/multi-child/multi-child.component';
import {Con2Component} from './learn-pipe/component/con2/con2.component';
import {ChungComponent} from './learn-pipe/component/chung/chung.component';

const routes: Routes = [
  { path: '', redirectTo: '/LearnPipe', pathMatch: 'full'},
  { path: 'LearnPipe', loadChildren: () => import('./learn-pipe/learn-pipe.module').then(m => m.LearnPipeModule) },
  {path: 'chung', component: ChungComponent,
  children: [
    {path: 'con1', component: Con1Component, outlet: 'router1'},
    {path: 'con2', component: Con2Component, outlet: 'router2'},
  ]},
  { path: 'learnDirective', loadChildren: () => import('./learn-directive/learn-directive.module').then(m => m.LearnDirectiveModule) }
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    FormsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
