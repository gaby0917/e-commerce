import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router'; //Remove inportação do RouterOutlet, pois no momento não estou usando no momento
import { Produto } from './features/produtos/produto/produto'; 
import { usuarioLogado, login, logout } from './core/auth';
import { UpperCasePipe } from '@angular/common';
//import {ListaProdutos} from './features/produtos/lista-produtos/lista-produtos';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, UpperCasePipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('e-commerce');
  nomeLoja = 'Pewiccon'; //nome do e-commerce
  usuarioLogado = usuarioLogado;
  login = login;
  logout = logout;
}