import { AppMaterialModule } from './app-material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { NavbarComponent } from './partials/navbar/navbar.component';
import { RequestComponent } from './pages/request/request.component';
import { AddItemComponent } from './pages/add-item/add-item.component';
import { ItemComponent } from './pages/item/item.component';
import { ItensComponent } from './pages/itens/itens.component';
import { ListarSolicitacoesComponent } from './pages/listar-solicitacoes/listar-solicitacoes.component';
import { ApiKey } from './../../consts';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    NavbarComponent,
    RequestComponent,
    AddItemComponent,
    ItemComponent,
    ItensComponent,
    ListarSolicitacoesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: ApiKey
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
