import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CmsModule } from './cms/cms.module';
import { CategoryComponent } from './pages/category/category.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { MyCardComponent } from './pages/my-card/my-card.component';
import { NoFoundComponent } from './pages/no-found/no-found.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RecoveryComponent } from './pages/recovery/recovery.component';
import { RegisterComponent } from './pages/register/register.component';
import { CustomPreloadService } from './services/custom-preload.service';
import { QuicklinkStrategy } from 'ngx-quicklink'
import { AuthGuard } from './guards/auth.guard';


/*
Arreglos que referencia una url con su pagina en la aplicacion
Ej de url: http://localhost:4200/catalogo
*/
const routes: Routes = [
  /*
  // path: '', define el compoenente que se carga por defecto, sin ruta en la url
  // la ruta por defecto tambien se puede llevar acabo con un redirect, que es como se implementa en este proyecto
  {
    path: '',
    component: HomeComponent
  },
  */
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  /*
  Enviar paramaetros por url
  */
  {
    path: 'catalogo/:id',
    component: CategoryComponent
  },
  {
    path: 'my-cart',
    component: MyCardComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'recovery',
    component: RecoveryComponent,
  },
  {
    path: 'profile',
    /*
    Forma de aplicar guardianes a las rutas
    */
    canActivate: [AuthGuard],
    component: ProfileComponent,
  },
  /*
  Importar la carga de un modulo Lazy Loading
  */
  {
    path: 'cms',
    loadChildren: () => import('./cms/cms.module').then(m => m.CmsModule),
    /*
    Cada modulo que queramos que precargue le añadimos:
    data: { preload: true }
    */
    data: { preload: true }
  },
  /*
  Cuando no encuentra nada, carga este componenete
  Este instruccion debe ir de ultima en la lista de url
  La abreviacion para cuando no encuentre nada es: **
  */
  {
    path: '**',
    component: NoFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    /*
    para la precarga de todos los modulos necesitamos:
    1. import { PreloadAllModules } from '@angular/router';
    2. preloadingStrategy: PreloadAllModules
    */
    /*
    si el sistema de precarga es personalizado llamados otra estrategia de precarga
    ej: preloadingStrategy: CustomPreloadService
    */
    /*
    si queremos habilitar la estrategia de carga segun los links en pantalla, podemos usar
    preloadingStrategy: QuicklinkStrategy
    de la libreria ngx-quicklink
    si hay submodulos, hay que habilitar en cada modulo la estrategia de precarla
    */
    preloadingStrategy: CustomPreloadService,
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
