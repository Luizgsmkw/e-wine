import { Injectable } from '@angular/core';
import { Produto, CategoriaProduto } from 'src/app/models/produto';


@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
private produtos: Produto[] = [
{
  imagem:'https://ingavinhos.agilecdn.com.br/40.png', 
  nomeDoProduto: 'Vinho Luigi Bosca Malbec',
  descricao: 'Um tinto puro, de grande corpo, estrutura, caráter e toda a suculência típica da variedade. Permanência longa e final de boca elegante.',
  uva: 'malbec',
  pais: 'Argentina',
  preco: 190.00,
  emPromocao: true,
  desconto: 0.2, //0...1  
  categoria: CategoriaProduto.TINTO,
},

{
  imagem:'https://ingavinhos.agilecdn.com.br/3955.png?v=9-101213491', 
  nomeDoProduto: 'Vinho Brado Branco',
  descricao: 'Vinho branco, de Portugal da região do Alentejo, premiado, de cor citrina com nuance esverdeada. Na boca apresenta sabor macio, equilibrado, com sensação persistente de frescura no final da prova. Aroma com boa intensidade aromática frutada e floral.',
  uva: 'Fernão Pires, Roupeiro, Tamarez',
  pais: 'Portugal',
  preco: 76.10,
  emPromocao: true,
  desconto: 0.3, //0...1  
  categoria: CategoriaProduto.BRANCO,
},

{
  imagem:'https://ingavinhos.agilecdn.com.br/5320.png?v=9-101213491', 
  nomeDoProduto: 'Vinho Brado Rosado',
  descricao: 'Vinho de cor salmão brilhante, com uma excelente frescura aromática, onde se destacam cativantes notas de frutos silvestres do Douro, em perfeita sintonia com elegantes notas florais.',
  uva: 'Trincadeira, Aragonez, Castelão',
  pais: 'Portugal',
  preco: 90.33,
  emPromocao: true,
  desconto: 0.1, //0...1  
  categoria: CategoriaProduto.ROSE,
},


{
  imagem:'https://ingavinhos.agilecdn.com.br/6177.png?v=9-101213491', 
  nomeDoProduto: 'Espumante La Linda Brut',
  descricao: 'Coloração limão, brilhante, perlage fino. Paladar leve, com acidez viva que aporta frescor, conjunto seco, porém macio, e final equilibrado, agradável. Expressivo e refinado ao nariz, com frutas brancas frescas, maçã, pêra, notas florais e de mel.',
  uva: 'Chardonnay',
  pais: 'Argentina',
  preco: 220.00,
  emPromocao: true,
  desconto: 0.1, //0...1  
  categoria: CategoriaProduto.ESPUMANTE,
},

{
  imagem:'https://ingavinhos.agilecdn.com.br/1793.png?v=9-101213491', 
  nomeDoProduto: 'Vinho La Linda Torrontés',
  descricao: ' Cor verdeal brilhante. Exótico e extremamente perfumado com casca de laranja, jasmim, lichia e lavanda. Mediano de corpo, fresco e persistente.',
  uva: 'Torrontes',
  pais: 'Argentina',
  preco: 80.77,
  emPromocao: true,
  desconto: 0.2, //0...1  
  categoria: CategoriaProduto.BRANCO,
},
{
  imagem:'https://ingavinhos.agilecdn.com.br/33.png?v=9-101213491', 
  nomeDoProduto: 'Vinho La Linda Malbec',
  descricao: 'É um vinho límpido e brilhante, de coloração violeta intensa. Seus aromas são de frutas vermelhas maduras, especialmente ameixas, além de sutis notas florais.',
  uva: 'Malbec',
  pais: 'Argentina',
  preco: 80.56,
  emPromocao: true,
  desconto: 0.3, //0...1  
  categoria: CategoriaProduto.TINTO,
},

{
  imagem:'https://ingavinhos.agilecdn.com.br/2326.png?v=9-101213491', 
  nomeDoProduto: 'Vinho By Quinta Do Judeu',
  descricao: 'Vinho tinto, de Portugal, DOC do Douro, de cor vermelho rubi, ao nariz fruta vermelha fresca, na boca e equilibrado, de média a longa profundidade.',
  uva: 'Touringa Franca',
  pais: 'Portugal',
  preco: 149.90,
  emPromocao: true,
  desconto: 0.3, //0...1  
  categoria: CategoriaProduto.TINTO,
},
{
  imagem:'https://ingavinhos.agilecdn.com.br/191.png?v=9-101213491', 
  nomeDoProduto: 'Vinho Quinta da Estação',
  descricao: 'Encorpado, mas harmonioso, cheio de frutas e muito equilíbrio. Termina com boa intensidade',
  uva: 'Tinta Roriz',
  pais: 'Portugal',
  preco: 95.40,
  emPromocao: true,
  desconto: 0.3, //0...1  
  categoria: CategoriaProduto.TINTO,
},

{
  imagem:'https://ingavinhos.agilecdn.com.br/5484.png?v=9-101213491', 
  nomeDoProduto: 'Vinho Cume Alves de Sousa',
  descricao: 'Encorpado, mas harmonioso, cheio de fruta e um grande equilíbrio. Final com boa intensidade',
  uva: 'Tinta Barroca',
  pais: 'Portugal',
  preco: 130.65,
  emPromocao: true,
  desconto: 0.3, //0...1  
  categoria: CategoriaProduto.TINTO,
},

{
  imagem:'https://ingavinhos.agilecdn.com.br/190.png?v=9-101213491', 
  nomeDoProduto: 'Vinho Quinta da Estação Branco',
  descricao: 'Boca fresca, com ótima polpa e delicioso fim de boca frutado',
  uva: 'Malvasia Tosvana',
  pais: 'Portugal',
  preco: 87.78,
  emPromocao: true,
  desconto: 0.3, //0...1  
  categoria: CategoriaProduto.BRANCO,
},


{
  imagem:'https://ingavinhos.agilecdn.com.br/1896.png?v=9-101213491', 
  nomeDoProduto: 'Vinho Versátil Branco',
  descricao: 'Na boca muito fresco, resultado da boa acidez e final de prova mineral.',
  uva: 'Viosinho',
  pais: 'Portugal',
  preco: 87.98,
  emPromocao: true,
  desconto: 0.3, //0...1  
  categoria: CategoriaProduto.BRANCO,
},

{
  imagem:'https://ingavinhos.agilecdn.com.br/2007.png?v=9-101213491', 
  nomeDoProduto: 'Vinho Herdade Das Albernoas ',
  descricao: 'No paladar é leve e fresco com bom equilibrio e agradável acidez',
  uva: 'Arinto',
  pais: 'Portugal',
  preco: 73.63,
  emPromocao: true,
  desconto: 0.3, //0...1  
  categoria: CategoriaProduto.BRANCO,
},

{
  imagem:'https://ingavinhos.agilecdn.com.br/6020.png?v=9-101213491', 
  nomeDoProduto: 'Vinho Monte Seco Branco',
  descricao: 'Macio e fresco, sabor a fruta, jovem e fino.',
  uva: 'Varietal',
  pais: 'Portugal',
  preco: 50.20,
  emPromocao: true,
  desconto: 0.3, //0...1  
  categoria: CategoriaProduto.BRANCO,
},

{
  imagem:'https://ingavinhos.agilecdn.com.br/6234.png?v=9-101213491', 
  nomeDoProduto: 'Vinho Duquesa Maria Superior',
  descricao: 'Na boca, tem corpo mediano, aveludado, macio mas com imensa frescura.',
  uva: 'Viognier',
  pais: 'Portugal',
  preco: 94.62,
  emPromocao: true,
  desconto: 0.3, //0...1  
  categoria: CategoriaProduto.BRANCO,
},

{
  imagem:'https://ingavinhos.agilecdn.com.br/390.png?v=9-101213491', 
  nomeDoProduto: 'Vinho Quinta do Morgado Branco',
  descricao: 'Na boca, tem corpo mediano, aveludado, floral intenso',
  uva: 'Isabel',
  pais: 'Brasil',
  preco: 56.62,
  emPromocao: true,
  desconto: 0.3, //0...1  
  categoria: CategoriaProduto.BRANCO,
},


{
  imagem:'https://ingavinhos.agilecdn.com.br/1036.png?v=9-101213491', 
  nomeDoProduto: 'Vinho Quinta do Morgado Rosado ',
  descricao: 'Equilibrado, macio e doce',
  uva: 'Niagara',
  pais: 'Brasil',
  preco: 56.62,
  emPromocao: true,
  desconto: 0.3, //0...1  
  categoria: CategoriaProduto.ROSE,
},

{
  imagem:'https://ingavinhos.agilecdn.com.br/2426.png?v=9-101213491', 
  nomeDoProduto: 'Vinho Quinta do Morgado Tinto ',
  descricao: 'Equilibrado, doce, persistente.',
  uva: 'Niagara',
  pais: 'Brasil',
  preco: 89.62,
  emPromocao: true,
  desconto: 0.3, //0...1  
  categoria: CategoriaProduto.TINTO,
},

{
  imagem:'https://ingavinhos.agilecdn.com.br/348.png?v=9-101213491', 
  nomeDoProduto: 'Espumante Salton Brut',
  descricao: 'Seu sabor é refrescante, com uma excelente acidez, enchendo o paladar com a sua cremosidade.',
  uva: 'Chardonnay',
  pais: 'Brasil',
  preco: 90.62,
  emPromocao: true,
  desconto: 0.3, //0...1  
  categoria: CategoriaProduto.ESPUMANTE,
},


{
  imagem:'https://ingavinhos.agilecdn.com.br/602.png?v=9-108834219', 
  nomeDoProduto: 'Vinho Villard Chardonnay Reserva',
  descricao: 'Refrescante na boca, boa textura. Final suculento e mineral',
  uva: 'Chardonnay',
  pais: 'Chile',
  preco: 114.21,
  emPromocao: true,
  desconto: 0.3, //0...1  
  categoria: CategoriaProduto.BRANCO,
},

{
  imagem:'https://ingavinhos.agilecdn.com.br/45.png?v=9-101213491', 
  nomeDoProduto: 'Epumante Prosecco Bedin',
  descricao: 'Cremoso e dissetante, com ótimo equilíbrio frescor-maciez.',
  uva: 'Chardonnay',
  pais: 'Itália',
  preco: 127.91,
  emPromocao: true,
  desconto: 0.3, //0...1  
  categoria: CategoriaProduto.ESPUMANTE,
},

{
  imagem:'https://ingavinhos.agilecdn.com.br/4684.png?v=9-101213491', 
  nomeDoProduto: 'Espumante Salton Series Brut Rose',
  descricao: 'Seu paladar é cremoso, de acidez refrescante e prolongada persistência',
  uva: 'Merlot',
  pais: 'Brasil',
  preco: 98.11,
  emPromocao: true,
  desconto: 0.3, //0...1  
  categoria: CategoriaProduto.ESPUMANTE,
},

{
  imagem:'https://ingavinhos.agilecdn.com.br/1356.png?v=9-101213491', 
  nomeDoProduto: 'Vinho Noaillac Cru Bourgeois',
  descricao: 'A estrutura gustativa mostra-se macia e acessível, com taninos bem fundidos ao conjunto, integrado frescor e bela persistência.',
  uva: 'Petit Verdot',
  pais: 'França',
  preco: 150.11,
  emPromocao: true,
  desconto: 0.3, //0...1  
  categoria: CategoriaProduto.TINTO,
},

{
  imagem:'https://ingavinhos.agilecdn.com.br/6373.png?v=9-148096717', 
  nomeDoProduto: 'Vinho Lourinho Frisante Rose',
  descricao: 'Leve e fresco, com boa acidez. Presença marcada de CO2, boa persistência',
  uva: 'Merlot',
  pais: 'Portugal',
  preco: 100.11,
  emPromocao: true,
  desconto: 0.3, //0...1  
  categoria: CategoriaProduto.ROSE,
},
{
  imagem:'https://ingavinhos.agilecdn.com.br/6367.png?v=9-146078681', 
  nomeDoProduto: 'Vinho Primevo Selection Branco ',
  descricao: 'Paladar equilibrado, fresco, frutado e acídulo no final.',
  uva: 'Arinto',
  pais: 'Portugal',
  preco: 79.11,
  emPromocao: true,
  desconto: 0.3, //0...1  
  categoria: CategoriaProduto.BRANCO,
},

{
  imagem:'https://ingavinhos.agilecdn.com.br/34.png?v=9-101213491', 
  nomeDoProduto: 'Vinho Paço Do Conde Herdade ',
  descricao: 'Paladar equilibrado, fresco, frutado e acídulo no final.',
  uva: 'Arinto',
  pais: 'Portugal',
  preco: 109.11,
  emPromocao: true,
  desconto: 0.3, //0...1  
  categoria: CategoriaProduto.BRANCO,
},

{
  imagem:'https://ingavinhos.agilecdn.com.br/5891.png?v=9-101213491', 
  nomeDoProduto: ' Vinho Chantel Verde DOC',
  descricao: 'Volumoso, com boa acidez, refrescante e elegante, excelente vinho.',
  uva: 'Loureiro',
  pais: 'Portugal',
  preco: 109.11,
  emPromocao: true,
  desconto: 0.3, //0...1  
  categoria: CategoriaProduto.BRANCO,
},

];

getProdutos(): Produto[]{
  return this.produtos;
}

addProduto(produto: Produto) {
  this.produtos.push(produto);
}
  constructor() { }
}