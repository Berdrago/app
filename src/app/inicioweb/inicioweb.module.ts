import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IniciowebPageRoutingModule } from './inicioweb-routing.module';

import { IniciowebPage } from './inicioweb.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IniciowebPageRoutingModule
  ],
  declarations: [IniciowebPage]
})
export class IniciowebPageModule {}
