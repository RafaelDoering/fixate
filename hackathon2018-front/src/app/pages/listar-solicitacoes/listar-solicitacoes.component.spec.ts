import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarSolicitacoesComponent } from './listar-solicitacoes.component';

describe('ListarSolicitacoesComponent', () => {
  let component: ListarSolicitacoesComponent;
  let fixture: ComponentFixture<ListarSolicitacoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarSolicitacoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarSolicitacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
