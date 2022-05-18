import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PingpongPage } from './pingpong.page';

const routes: Routes = [
  {
    path: '',
    component: PingpongPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PingpongPageRoutingModule {}
