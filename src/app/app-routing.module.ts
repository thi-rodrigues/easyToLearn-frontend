import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './view/home/home.component';
import { PraticarComponent } from './view/praticar/praticar.component';
import { PalavraComponent } from './view/palavra/palavra.component';
import { DicionarioComponent } from './view/dicionario/dicionario.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  }, 
  { path: 'inicio',   component: HomeComponent      },
  { path: 'praticar', component: PraticarComponent },
  { path: 'palavra',  component: PalavraComponent },
  { path: 'dicionario', component: DicionarioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})

export class AppRoutingModule { }
