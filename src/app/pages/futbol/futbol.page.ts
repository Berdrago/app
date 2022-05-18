import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-futbol',
  templateUrl: './futbol.page.html',
  styleUrls: ['./futbol.page.scss'],
})
export class FutbolPage implements OnInit {

  data: any = {
    cantidad: "",
    pelota: ""
  };
  niveles: any[] = [
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
    (this.data.cantidad != "") &&
      //presentar una alerta
      this.presentAlert("Formulario completo","Su cancha es la N° " + this.data.cantidad + " con " + this.data.pelota + " pelota.") 
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
