import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PingpongPageRoutingModule } from './pingpong-routing.module';

import { PingpongPage } from './pingpong.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PingpongPageRoutingModule
  ],
  declarations: [PingpongPage]
})
export class PingpongPageModule {}
