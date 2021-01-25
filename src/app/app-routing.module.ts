import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';

const routes: Routes = [{ path: 'LearnPipe', loadChildren: () => import('./learn-pipe/learn-pipe.module').then(m => m.LearnPipeModule) }];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    FormsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
