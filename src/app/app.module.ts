import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// modulo para usar ngModule y formularios
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// modulo para realizar peticiones a una API
import { HttpClientModule } from '@angular/common/http';
// modulo llamado para poder declarar nuestros interceptores en el appmodule
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImgComponent } from './components/img/img.component';
import { ReversePipe } from './pipes/reverse.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { TxtComponent } from './components/txt/txt.component';
import { BtnComponent } from './components/btn/btn.component';
import { TimeInterceptor } from './interceptors/time.interceptor';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { CategoryComponent } from './pages/category/category.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { MyCardComponent } from './pages/my-card/my-card.component';
import { NoFoundComponent } from './pages/no-found/no-found.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RecoveryComponent } from './pages/recovery/recovery.component';
import { RegisterComponent } from './pages/register/register.component';
import { QuicklinkModule } from 'ngx-quicklink';
import { FormControlComponent } from './components/form-control/form-control.component'
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material';

/*
- El decorador NgModule declara el manejador del modulo
- Un puede crear sus propios modulos o importar modulos del mismo angular o de terceros
- Los mudulos son compuestos por paginas, componentes, pipes, directivas, entre otras cosas
- Existen varios tipos de modulos como root, core, routing, feature/domain, shared moudule
- Los servicios si se pueden usar en diferentes modulos
*/
@NgModule({
  // Declaramos componentes, pipes y directivas
  declarations: [
    AppComponent,
    ImgComponent,
    ReversePipe,
    HighlightDirective,
    TxtComponent,
    BtnComponent,
    CategoryComponent,
    HomeComponent,
    LoginComponent,
    MyCardComponent,
    NoFoundComponent,
    ProfileComponent,
    RecoveryComponent,
    RegisterComponent,
    FormControlComponent
  ],
  // Importacion de modulos
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    QuicklinkModule,
    MatButtonModule,
    MatIconModule
  ],
  // Declaramos nuestro nuesvo provider (servicios) y nuestro interceptor
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TimeInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ],
  // Componente de inicio
  bootstrap: [AppComponent],
  // Si queremos que nuestro modulo comparata caracteristicas a otros modulos los declaramos aca
  exports: []
})
export class AppModule { }
