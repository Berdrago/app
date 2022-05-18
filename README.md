
# Proyecto  Areas-recreativas


# Requisitos
Instalar node js
#
Instalar Ionic Angular
#
Instalar visual studios o Editor de codigo a preferencia 
#
Instalar snipet de ionic y angular

## Objetivos de la Aplicacion
Crear aplición híbrida con framework de Ionic Angular que gira entoro a las areas reacreativas que faltan y tiene Duoc UC.


````
#--------------Crear Proyecto----------------
ionic start Areas Recreativas  blank --type angular
````
````
--------------Levantar servicio-------------
ionic serve 
ionic serve -lab
npx ionic serve 
ng serve --o  
npx ng serve 
````
````
---------Abrir con visual Studios----
code .
````
````
--------Instalar boostrap----
npm install bootstrap
----Modificar angular.json----- styles
"styles": [
              "src/styles.css",
              "node_modules/bootstrap/dist/css/bootstrap.min.css"
            ],
````
````
--------Crear Componentes----------
npx ng g c components/navbar
npx ng g c components/agregareditar
npx ng g c components/list
npx ng g c components/ver

````
````

------------Tipos de Type----------------------------
decimal-email-none-numeric-number-search-tel-text-string-url-date-undifined
````
````
-----------Agregar firabase al Proyecto--------------
npm install @angular/fire firebase --save
````
````
----------Importaciones para Firebase-----------------------
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';
import { BackendModule } from './backend/backend.module';

import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireFunctionsModule } from '@angular/fire/compat/functions';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule} from '@angular/fire/compat/firestore';
import { AngularFireMessagingModule } from '@angular/fire/compat/messaging';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    PagesModule,
    BackendModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireFunctionsModule,
    AngularFireStorageModule,
    AngularFireMessagingModule,
    AngularFirestoreModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
````
````
-----------Crear Carpeta de Base de Datos-------------------
npx ionic g s /services/firestore
````
````
## Author
Dread/Berdrago
Jose Hijar
Ignacio Morales
Tomas Gallardo
Tomas Carvajal
Diego 
````

