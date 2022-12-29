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
    component: ProfileComponent,
  },
  /*
    Importar la carga de un modulo Lazy Loading
    */
  {
    path: 'cms',
    loadChildren: () => import('./cms/cms.module').then(m => m.CmsModule)
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
    para la precarga de todos los modulos
    import { PreloadAllModules } from '@angular/router';
    */
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
