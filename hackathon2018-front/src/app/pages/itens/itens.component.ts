import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { ApiService } from './../../services/api.service';

@Component({
  selector: 'app-itens',
  templateUrl: './itens.component.html',
  styleUrls: ['./itens.component.scss']
})
export class ItensComponent implements OnInit {
  itens;
  unidades;
  categorias;

  pesquisaForm = this.fb.group({
    unidade: [''],
    status: [''],
  });

  onSubmit() {
    this.apiService.getItensPorUnidade(this.pesquisaForm.value.unidade, this.pesquisaForm.value.status).subscribe((res3) => {
      this.itens = res3;
    });
  }

  ngOnInit() {
    this.apiService.getUnidades().subscribe((res) => {
      this.unidades = res;
      this.apiService.getCategorias().subscribe((res2) => {
        this.categorias = res2;
        this.pesquisaForm.patchValue({
          unidade: '5be77636f3bea200e6413392',
          status: 'Todos',
        });
        this.apiService.getItensPorUnidade(this.pesquisaForm.value.unidade, this.pesquisaForm.value.status).subscribe((res3) => {
          this.itens = res3;
        });
      });
    });
  }

  constructor(private fb: FormBuilder, private apiService: ApiService) { }
}
