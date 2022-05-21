import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colaborador',
  templateUrl: './colaborador.component.html',
  styleUrls: ['./colaborador.component.css']
})
export class ColaboradorComponent implements OnInit {

  email: string = ''; //guardar o valor digitado
  senha: string = '';

  onSubmit(){
    alert(`Bem-vindo(a) ${this.email}`);
  }

  constructor() { }

  ngOnInit(): void {
  }

}