import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/models/produto';
import { ProdutosService } from 'src/app/shared/services/produtos/produtos.service';
@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  images = ['https://bebidasdosul.com.br/wine/modules/minicslider/uploads/Banner_Site_os_procurados_do_m%C3%AAs_PRODUTO.png', 'https://bebidasdosul.com.br/wine/modules/minicslider/uploads/Banner_Site_os_procurados_do_m%C3%AAs_CAMPANHA.png', 'https://bebidasdosul.com.br/wine/modules/minicslider/uploads/Prancheta_2-05-16.png'];

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
