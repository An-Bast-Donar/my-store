import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './pages/category/category.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { MyCardComponent } from './pages/my-card/my-card.component';
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
