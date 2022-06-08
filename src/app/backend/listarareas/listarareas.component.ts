import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Producto } from 'src/app/models';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-listarareas',
  templateUrl: './listarareas.component.html',
  styleUrls: ['./listarareas.component.scss'],
})
export class ListarareasComponent implements OnInit {

  productos: Producto[] = [];
  newProducto: Producto = {
    nombre: '',
    fecha: null,
    hora: null,
    imagen: '',
    categoria: '',
    id: this.firestoreService.getId(),
    fcreacion : new Date()
  } ;

  private path = 'Productos/';

  constructor(public menucontroler: MenuController,
              public firestoreService: FirestoreService){ }
  //Se ejecuta automaticamente
  ngOnInit() {
    this.getProductos();
  }
  //Metodo Click de menu
  openMenu() {
    console.log('Open Menu');
    this.menucontroler.toggle('principal');
  }
  //Metodo click para guardar en la base de datos
  guardarProducto(){
    this.firestoreService.createDoc(this.newProducto, this.path, this.newProducto.id);
  }
  //La notificaccion del guradado
  getProductos(){
    this.firestoreService.getCollection<Producto>(this.path).subscribe( res => {
      console.log(res);
      this.productos = res;
    });
  }

  deleteProducto(producto: Producto){
    console.log(this.deleteProducto);
    this.firestoreService.deleteDoc(this.path, producto.id);
  }

}

