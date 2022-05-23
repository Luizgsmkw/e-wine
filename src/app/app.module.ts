import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { LoginComponent } from './components/login/login.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProdutosComponent } from './components/produtos/produtos.component';
import { ProdutoComponent } from './components/produto/produto.component';
import { NovoProdutoComponent } from './components/novo-produto/novo-produto.component';
import { ColaboradorComponent } from './components/colaborador/colaborador.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import localePt from "@angular/common/locales/pt";
import { registerLocaleData } from '@angular/common';
import { LOCALE_ID } from '@angular/core';
import { IndicacoesDeVinhosComponent } from './components/indicacoes-de-vinhos/indicacoes-de-vinhos.component';


registerLocaleData(localePt);
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CadastroComponent,
    LoginComponent,
    FeedbackComponent,
    NotFoundComponent,
    NavbarComponent,
    ProdutosComponent,
    ProdutoComponent,
    NovoProdutoComponent,
    ColaboradorComponent,
    FooterComponent,
    IndicacoesDeVinhosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
   
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
