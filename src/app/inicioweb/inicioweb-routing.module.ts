import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IniciowebPage } from './inicioweb.page';

const routes: Routes = [
  {
    path: '',
    component: IniciowebPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IniciowebPageRoutingModule {}
