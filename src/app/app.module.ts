import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { NovaparoquiaComponent } from './componentes/paroquias/novaparoquia/novaparoquia.component';
import { ListaparoquiasComponent } from './componentes/paroquias/listaparoquias/listaparoquias.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NovaparoquiaComponent,
    ListaparoquiasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
