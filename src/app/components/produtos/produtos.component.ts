import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/models/produto';
import { ProdutosService } from 'src/app/shared/services/produtos/produtos.service';
@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  images = [ 'https://raw.githubusercontent.com/Luizgsmkw/e-wine/main/src/assets/1640283515_vinhos_banner.webp','https://raw.githubusercontent.com/Luizgsmkw/e-wine/main/src/assets/Banner-Vinho-Site-Super-Telemaco.jpg', 'https://raw.githubusercontent.com/Luizgsmkw/e-wine/main/src/assets/banner-vinho.png'];

  constructor(private produtosService: ProdutosService) { }
  produtos: Produto[] = [];
  carrinho: Produto[] = [];


  addCarrinho(produto:Produto){
    this.carrinho.push(produto);
    console.log("Produto adicionado");
    console.log(this.carrinho);
  }

  produtoNoCarrinho(produto:Produto):boolean {
    return this.carrinho.includes(produto);
  }

  ngOnInit(): void {
    //dentro do hook on-init vc deve colocar
    //os acessos aos dados iniciais
    this.produtos = this.produtosService.getProdutos();

  }

}
