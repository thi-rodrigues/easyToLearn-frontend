import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './view/home/home.component';
import { UsuarioFormComponent } from './view/usuario/usuario-form/usuario-form.component';
import { AppComponent } from './app.component';
import { UsuarioListComponent } from './view/usuario/usuario-list/usuario-list.component';
import { UsuarioEditComponent } from './view/usuario/usuario-edit/usuario-edit.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  }, 
  { path: 'cadastro', component: UsuarioFormComponent     },
  { path: 'inicio',   component: HomeComponent      },
  { path: 'teste',    component: AppComponent       },
  { path: 'usuarios',   component: UsuarioListComponent },
  { path: 'usuarios/editar/:id',   component: UsuarioEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})

export class AppRoutingModule { }
