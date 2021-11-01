import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { ListaparoquiasComponent } from './componentes/paroquias/listaparoquias/listaparoquias.component';
import { NovaparoquiaComponent } from './componentes/paroquias/novaparoquia/novaparoquia.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'paroquias', component:ListaparoquiasComponent },
  { path: 'paroquias/nova', component: NovaparoquiaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
