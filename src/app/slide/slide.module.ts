import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SlidePage } from './slide.page';
import { SlidePageRoutingModule } from './slide-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SlidePageRoutingModule
  ],
  declarations: [SlidePage]
})
export class SlidePageModule {}
