import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router'; //Remove inportação do RouterOutlet, pois no momento não estou usando no momento
import { Produto } from './features/produtos/produto/produto'; 
import {ListaProdutos} from './features/produtos/lista-produtos/lista-produtos';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('e-commerce');
  nomeLoja = 'Liwi';
}