import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {

  constructor(public menucontroler: MenuController) { }

  ngOnInit() {}
  openMenu() {
    console.log('Open Menu');
    this.menucontroler.toggle('principal');
  }

}
