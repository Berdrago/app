import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AreasComponent } from './areas/areas.component';
import { UsersComponent } from './users/users.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [AreasComponent,UsersComponent],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class BackendModule { }
