import { Filme, filmes } from './../filme.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent implements OnInit {
  filme: Filme | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Primeiro, obtenha o ID do produto da rota atual.
    const routeParams = this.route.snapshot.paramMap;
    const filmesIdFromRoute = Number(routeParams.get('id'));

    // Encontre o produto que corresponde ao id fornecido em route.
    this.filme = filmes.find(
      (filme) => filme.id === filmesIdFromRoute
    );
  }
}
