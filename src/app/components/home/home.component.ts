import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
})
export class HomeComponent  {
 
  images = ['https://st.depositphotos.com/1258191/2745/i/600/depositphotos_27453831-stock-photo-wine.jpg', 'https://media.istockphoto.com/photos/three-glasses-of-white-rose-and-red-wine-on-a-wooden-barrel-picture-id1301017778?k=20&m=1301017778&s=612x612&w=0&h=ITey6o-GGEQKANHjKyH0YxG87zAkT37TyFQpv0VG1Hg='];

  constructor() {
    // customize default values of carousels used by this component tree
    
  }

}