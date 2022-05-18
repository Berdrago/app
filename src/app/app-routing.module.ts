import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AreasComponent } from './backend/areas/areas.component';
import { UsersComponent } from './backend/users/users.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'inicioweb',
    loadChildren: () => import('./inicioweb/inicioweb.module').then( m => m.IniciowebPageModule)
  },
  {
    path: 'iniciosesion',
    loadChildren: () => import('./iniciosesion/iniciosesion.module').then( m => m.IniciosesionPageModule)
  },
  {
    path: 'sesion',
    loadChildren: () => import('./sesion/sesion.module').then( m => m.SesionPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'recuperar',
    loadChildren: () => import('./recuperar/recuperar.module').then( m => m.RecuperarPageModule)
  },
  {
    path: 'usuario',
    loadChildren: () => import('./usuario/usuario.module').then( m => m.UsuarioPageModule)
  },
  {
    path: 'bibloteca',
    loadChildren: () => import('./pages/bibloteca/bibloteca.module').then( m => m.BiblotecaPageModule)
  },
  {
    path: 'futbol',
    loadChildren: () => import('./pages/futbol/futbol.module').then( m => m.FutbolPageModule)
  },
  {
    path: 'pingpong',
    loadChildren: () => import('./pages/pingpong/pingpong.module').then( m => m.PingpongPageModule)
  },
  {
    path: 'sala',
    loadChildren: () => import('./pages/sala/sala.module').then( m => m.SalaPageModule)
  },
  { path: 'areas', component:AreasComponent },
  { path: 'users', component:UsersComponent },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
