import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { ApiKey } from './../../../consts';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  backendURL = 'http://localhost:3000/api/';
  geocodeURL = 'https://maps.googleapis.com/maps/api/geocode/';
  APIKey = ApiKey;

  getUnidades() {
    return this.httpClient.get(`${this.backendURL}unidade`);
  }

  getUnidade(idUnidade: string) {
    return this.httpClient.get(`${this.backendURL}unidade/${idUnidade}`).pipe(
      map(res => this.formatGetUnidade(res))
    );
  }

  formatGetUnidade(res) {
    return res.unidade;
  }

  getCategorias() {
    return this.httpClient.get(`${this.backendURL}categoria`);
  }

  getItens() {
    return this.httpClient.get(`${this.backendURL}item`).pipe(
      map(res => this.formatItensQuebrados(res))
    );
  }

  getItensPorUnidade(id: string, status: string) {
    return this.httpClient.get(`${this.backendURL}item-por-unidade/${id}/${status}`);
  }

  getItensQuebrados() {
    return this.httpClient.get(`${this.backendURL}item-quebrado`).pipe(
      map(res => this.formatItensQuebrados(res))
    );
  }

  formatItensQuebrados(res) {
    return res.itens;
  }

  getItem(patrimonio: string) {
    return this.httpClient.get(`${this.backendURL}item/${patrimonio}`).pipe(
      map(res => this.formatGetItem(res))
    );
  }

  getNumeroItensQuebrados() {
    return this.httpClient.get(`${this.backendURL}numero-itens-quebrados`).pipe(
      map(res => this.formatNumero(res))
    );
  }

  getNumeroItensEmOrdem() {
    return this.httpClient.get(`${this.backendURL}numero-itens-em-ordem`).pipe(
      map(res => this.formatNumero(res))
    );
  }

  formatNumero(res) {
    return res.count;
  }

  patchItem(id: string, status: string, descricao: string) {
    return this.httpClient.patch(`${this.backendURL}item/${id}`, {status, descricao});
  }

  formatGetItem(res) {
    return res.item;
  }

  addItem(patrimonio: number, unidade: number, lat: number, lng: number, categoria: string, nomeCategoria: string, responsavel: string,
    localizacao: string, complemento: string, status: string, descricao: string) {
    return this.httpClient.post(`${this.backendURL}item`, {
      patrimonio, unidade, lat, lng, categoria, nomeCategoria, responsavel,
      localizacao, complemento, status, descricao
    });
  }

  request(item: string, descricao: string) {
    return this.httpClient.post(`${this.backendURL}solicitacao`, { item, descricao });
  }

  getCoords(endereco: string) {
    return this.httpClient.get(`${this.geocodeURL}json?address=${endereco}&key=${this.APIKey}`).pipe(
      map(res => this.formatGetCoords(res))
    );
  }

  formatGetCoords(res) {
    return res.results[0].geometry.location;
  }

  constructor(private httpClient: HttpClient) { }
}
