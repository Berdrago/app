import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-sala',
  templateUrl: './sala.page.html',
  styleUrls: ['./sala.page.scss'],
})
export class SalaPage implements OnInit {
  
  data: any = {
    acomp: 0,
    numsala: "",
    tiempo: "",
    motivo: ""
  };

  niveles: any[] = [
    {id:1, nivel:"5min - 15min"},
    {id:2, nivel:"15min - 30min"},
    {id:3, nivel:"30min - 60min"}
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
      this.presentAlert("Formulario completo","Su sala " + this.data.numsala + " para " + this.data.acomps + " acompañantes se encuentra lista.") 
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