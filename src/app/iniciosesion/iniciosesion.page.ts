import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-iniciosesion',
  templateUrl: './iniciosesion.page.html',
  styleUrls: ['./iniciosesion.page.scss'],
})
export class IniciosesionPage implements OnInit {

  constructor(public menucontroler: MenuController) { }

  ngOnInit() {
  }
  openMenu() {
    console.log('Open Menu');
    this.menucontroler.toggle('principal');
  }

}
