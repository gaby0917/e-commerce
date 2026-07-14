import { Component, signal } from '@angular/core';
//!import { RouterOutlet } from '@angular/router'; //Remove inportação do RouterOutlet, pois no momento não estou usando no momento
import { Produto } from './components/produto/produto'; 
import {ListaProdutos} from './components/lista-produtos/lista-produtos';

@Component({
  selector: 'app-root',
  imports: [ListaProdutos],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('e-commerce');
}
