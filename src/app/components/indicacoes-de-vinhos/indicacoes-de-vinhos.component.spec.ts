import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicacoesDeVinhosComponent } from './indicacoes-de-vinhos.component';

describe('IndicacoesDeVinhosComponent', () => {
  let component: IndicacoesDeVinhosComponent;
  let fixture: ComponentFixture<IndicacoesDeVinhosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndicacoesDeVinhosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndicacoesDeVinhosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
