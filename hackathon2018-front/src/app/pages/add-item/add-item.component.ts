import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ApiService } from './../../services/api.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {
  unidades;
  categorias;

  addItemForm = this.fb.group({
    patrimonio: ['', [Validators.required]],
    unidade: ['', [Validators.required]],
    categoria: ['', [Validators.required]],
    responsavel: ['', [Validators.required]],
    localizacao: ['', [Validators.required]],
    complemento: ['', [Validators.required]],
    status: ['', [Validators.required]],
    descricao: ['', [Validators.required]],
  });

  onSubmit() {
    const form = this.addItemForm.value;

    this.apiService.getCoords(this.unidades.unidades[form.unidade].campus + ' ' +
      this.unidades.unidades[form.unidade].nome + ' ' +
      this.unidades.unidades[form.unidade].sigla + ' ' +
      form.localizacao + ' ' + form.localizacao).subscribe((res) => {
        this.apiService.addItem(form.patrimonio, this.unidades.unidades[form.unidade]._id,
          ((Math.random() / 17000) + res.lat), ((Math.random() / 17000) + res.lng),
          this.categorias.categorias[form.categoria]._id, this.categorias.categorias[form.categoria].nome,
          form.responsavel, form.localizacao, form.complemento, form.status, form.descricao).subscribe(() => {
            this.router.navigateByUrl('/');
          });
      });
  }

  ngOnInit() {
    this.apiService.getUnidades().subscribe((res) => {
      this.unidades = res;
      this.apiService.getCategorias().subscribe((res2) => {
        this.categorias = res2;
      });
    });
  }

  constructor(private fb: FormBuilder, private router: Router, private apiService: ApiService) { }
}
