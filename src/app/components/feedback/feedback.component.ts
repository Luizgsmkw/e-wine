import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  
  images = ['https://cdn.create.vista.com/api/media/medium/213224428/stock-photo-bottles-glass-red-wine-fruits?token=', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH__2Uglg28GqxwUkmzO0ovbOk9LvEZGnwuw&usqp=CAU'];

  constructor(private fb: FormBuilder) { }

  feedbackForm= this.fb.group({
    nome: ['', [Validators.required, Validators.minLength(5)]], 
    email: ['', [Validators.required, Validators.email]], 
    comentario: ['', [Validators.required, Validators.minLength(50), Validators.maxLength(200)]],
    nota: ['', [Validators.required]] 
  });

  get nome(){
    return this.feedbackForm.get('nome');
  }
  get email(){
    return this.feedbackForm.get('email');
  }
  get comentario(){
    return this.feedbackForm.get('comentario');
  }
  get nota(){
    return this.feedbackForm.get('nota');
  }

  onSubmit(){
    alert('Comentário enviado!');
    console.log(this.feedbackForm.value);
  }

  ngOnInit(): void {
  }

}

