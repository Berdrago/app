import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  template: `
  <ion-menu  ></ion-menu>
    <ion-content>
      <ion-slides pager="true"  >
        <ion-slide>
          <h1>Bienvenidos</h1>
        </ion-slide>
        <ion-slide>
          <h1>Ques es Areas Recreativas?</h1>
        </ion-slide>
        <ion-slide >
          <h1>Listo Para Comenzar</h1>
          <ion-icon color="danger" [routerLink]='["/slide"]' name="arrow-forward-circle-outline"></ion-icon>
        </ion-slide>
      </ion-slides>
    </ion-content>
  `
})
export class HomePage  implements OnInit {
  slideOpts = {
    initialSlide: 1,
    speed: 200,
  };
  constructor() {}

  ngOnInit() {
  }

}
