import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { RequestComponent } from './pages/request/request.component';
import { AddItemComponent } from './pages/add-item/add-item.component';
import { ItemComponent } from './pages/item/item.component';
import { ItensComponent } from './pages/itens/itens.component';
import { ListarSolicitacoesComponent } from './pages/listar-solicitacoes/listar-solicitacoes.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'registrar', component: SignupComponent},
  { path: 'entrar', component: LoginComponent },
  { path: 'solicitacao', component: RequestComponent },
  { path: 'add-item', component: AddItemComponent },
  { path: 'item/:id', component: ItemComponent },
  { path: 'itens', component: ItensComponent },
  { path: 'listar-solicitacoes', component: ListarSolicitacoesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
