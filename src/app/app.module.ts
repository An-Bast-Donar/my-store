import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// modulo para usar ngModule y formularios
import { FormsModule } from '@angular/forms';
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

@NgModule({
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
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  // Declaramos nuestro nuesvo provider y nuestro interceptor
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TimeInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
