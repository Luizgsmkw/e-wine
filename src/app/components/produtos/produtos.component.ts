import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/models/produto';
import { ProdutosService } from 'src/app/shared/services/produtos/produtos.service';
@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  images = [ 'https://images.tcdn.com.br/img/img_prod/991239/1640283515_vinhos_banner.jpg','https://www.meutelemaco.com.br/wp-content/uploads/Banner-Vinho-Site-Super-Telemaco.jpg', 'https://www.allshoppingdasbebidas.com.br/wp-content/uploads/2021/06/banner-vinho.png'];

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
