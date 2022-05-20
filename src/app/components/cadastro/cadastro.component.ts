import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, ValidationErrors, Validators } from '@angular/forms';
@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  images = ['https://cdn.pixabay.com/photo/2015/04/25/03/09/cork-738603_960_720.jpg', 'https://cdn.pixabay.com/photo/2017/03/27/13/36/champagne-2178775_960_720.jpg', 'https://cdn.pixabay.com/photo/2017/06/27/14/37/wines-2447514_960_720.jpg'];

  constructor(private fb: FormBuilder) { }

  cadastroForm= this.fb.group({
    nome: ['', [Validators.required, Validators.minLength(5)]], 
    email: ['', [Validators.required, Validators.email]], //igual
    endereco: ['', [Validators.required, Validators.maxLength(50)]], 
    senha: ['', [Validators.required, Validators.minLength(8)]], 
  });

  get nome(){
    return this.cadastroForm.get('nome');
  }
  get email(){
    return this.cadastroForm.get('email');
  }
  get endereco(){
    return this.cadastroForm.get('endereco');
  }
  get senha(){
    return this.cadastroForm.get('senha');
  }

  onSubmit(){
    alert('Cadastro realizado com sucesso! Seja bem-vindo(a)!');
    console.log(this.cadastroForm.value);
  }

  ngOnInit(): void {
  }

}
