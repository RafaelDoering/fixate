import { Component, OnInit } from '@angular/core';

import { ApiService } from './../../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  lat = -23.5587614;
  lng = -46.7314303;
  lats;
  lngs;
  categorias;
  patrimonios;
  status;
  quebrados: number;
  emOrdem: number;

  ngOnInit() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
      });
    } else {
      alert('Seu navegador não tem suporte a geolocalização.');
    }

    this.apiService.getItens().subscribe((res) => {
      const latss = [];
      const lngss = [];
      const categoriass = [];
      const patrimonioss = [];
      const statuss = [];

      res.forEach(function (value) {
        latss.push(value.lat);
        lngss.push(value.lng);
        categoriass.push(value.nomeCategoria);
        patrimonioss.push(value.patrimonio);
        if (value.status === 'Quebrado') {
          statuss.push('red-dot.png');
        } else if (value.status === 'Aguardando Avalidação') {
          statuss.push('orange-dot.png');
        } else if (value.status === 'Em manutenção') {
          statuss.push('orange-dot.png');
        } else if (value.status === 'Em ordem') {
          statuss.push('blue-dot.png');
        }
      });

      this.lats = latss;
      this.lngs = lngss;
      this.categorias = categoriass;
      this.patrimonios = patrimonioss;
      this.status = statuss;

      this.apiService.getNumeroItensQuebrados().subscribe((res2) => {
        this.quebrados = res2;
        this.apiService.getNumeroItensEmOrdem().subscribe((res3) => {
          this.emOrdem = res3;
        });
      });
    });
  }

  onMapClick(event) {
    this.lat = event.coords.lat;
    this.lng = event.coords.lng;
  }

  constructor(private apiService: ApiService) { }
}
