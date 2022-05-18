import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-pingpong',
  templateUrl: './pingpong.page.html',
  styleUrls: ['./pingpong.page.scss'],
})
export class PingpongPage implements OnInit {

  data: any = {
    paletas: "",
    pelotas: "",
    mesa: ""
  };

  niveles: any[] = [
    {id:1, nivel:"30min"},
    {id:2, nivel:"60min"}
  ]

  mesa: any[] = [
    {id:1, nivel:"1"},
    {id:2, nivel:"2"},
    {id:3, nivel:"3"},
    {id:4, nivel:"4"},
    {id:5, nivel:"5"},
    {id:6, nivel:"6"}
  ]
  

  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }

  limpiar(){
    for(var [key, value] of Object.entries(this.data)){
      Object.defineProperty(this.data, key, {value:""})
    }
  }

  mostrar(){
    (this.data.numsala != "") &&
      //presentar una alerta
      this.presentAlert("Formulario completo",
      "Su mesa es la N° " + this.mesa + " con:" +
      this.data.paletas +" paletas" +
      this.data.pelotas +" pelotas" +
      "por " + this.niveles
      ) 
      ||
      this.presentAlert("Formulario incompleto","No se pueden dejar campos vacios");

  }

  async presentAlert(titulo:string,mensaje:string){
    const alert = await this.alertController.create(
      {
        header: titulo,
        message: mensaje,
        buttons: ['OK']
      }
    );
    await alert.present();
  }

}
