import { Component } from '@angular/core';
import { Filme, filmes } from '../filme.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  filmes = [...filmes];
  
}
