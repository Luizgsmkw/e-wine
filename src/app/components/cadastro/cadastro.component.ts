import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, ValidationErrors, Validators } from '@angular/forms';
@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  images = ['https://sgw.bacanudo.com/storage/conteudo/1/4155/20200820112918_5f3e88be9a150.jpg ', 'http://www.nidelins.com.br/wp-content/uploads/2016/04/bon-vin2.jpg'];

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
