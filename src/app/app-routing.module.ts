import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './pages/category/category.component';
import { HomeComponent } from './pages/home/home.component';

/*
Arreglos que referencia una url con su pagina en la aplicacion
Ej de url: http://localhost:4200/catalogo
*/
const routes: Routes = [
  {
    path: 'catalogo',
    component: CategoryComponent
  },
  {
    path: 'home',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
