import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LocalizacaoService } from 'src/app/shared/services/localizacao/localizacao.service';
import { TemperaturaService, timezone } from 'src/app/shared/services/temperatura/temperatura.service';


@Component({
  selector: 'app-indicacoes-de-vinhos',
  templateUrl: './indicacoes-de-vinhos.component.html',
  styleUrls: ['./indicacoes-de-vinhos.component.css']
})
export class IndicacoesDeVinhosComponent implements OnInit {
  image0 = 'https://vinholando.com/wp-content/uploads/2021/12/Capa-12-1000x619.png.webp';
image1 = 'https://vinholando.com/wp-content/uploads/2021/12/3-8.png.webp';
image2 = 'https://vinholando.com/wp-content/uploads/2021/12/2-10.png.webp';
image3='https://vinholando.com/wp-content/uploads/2022/01/denominacao_de_origem_controlada.jpg.webp';
image4='https://vinholando.com/wp-content/uploads/2022/01/vinho_estragado.png.webp';
image5='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDCGFkmcn2gP76dVq0XReEHX9ZN9B5XNz3Mg&usqp=CAU';

  constructor(
    private localizacaoService: LocalizacaoService,
    private temperaturaApiService: TemperaturaService,
  ) { }

  temperatura$?: Observable<timezone>;
  error=false; 

  ngOnInit(): void {


  this.localizacaoService.getPosition().subscribe({
      next: (coords) => {this.temperatura$ = this.temperaturaApiService.getTemperatura(coords); 
      },
      error: (erro) => {
        console.error(erro);
        this.error = true;
      },
    });
  }
}
