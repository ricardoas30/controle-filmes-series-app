import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Filme } from 'src/app/model/filme';
import { ApiHttpService } from 'src/app/services/api-http.service';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent implements OnInit {
  filme: Filme | undefined;

  constructor(private apiHttpService: ApiHttpService,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.apiHttpService.filmeById(this.route.snapshot.params['id'])
        .subscribe(filme => this.filme = filme);
  }
}

