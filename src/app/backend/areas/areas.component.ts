import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-areas',
  templateUrl: './areas.component.html',
  styleUrls: ['./areas.component.scss'],
})
export class AreasComponent implements OnInit {

  constructor(public menucontroler: MenuController) { }

  ngOnInit() {}
  openMenu() {
    console.log('Open Menu');
    this.menucontroler.toggle('principal');
  }

}
