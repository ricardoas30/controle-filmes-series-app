import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  date = new Date();
  
  dados = {
    nome_app: 'Filmes App',
    nome_projeto: 'Projetos',
    copyright: `Copyright©2023-${this.date.getFullYear()}, Controle de Filmes e Séries App`,
    home: {
      nome: 'Home',
      url: '/home'
    },
    sobre: {
      nome: 'Sobre',
      url: '/sobre'
    },
    prototipo:{ 
      nome: 'Protótipo de Telas',
      url: 'https://www.figma.com/file/2cBVARLstxEGbgZ9cu9TAY/controle-filmes-series-app?type=design&node-id=5%3A256&t=oWoEzQrbs9XCnY8e-1'
    },
    github: { 
      nome: 'Github do Projeto',
      url: 'https://github.com/ricardoas30/controle-filmes-series-app'
    },
    bootstrap: { 
      nome: 'Bootstrap v5.2',
      url: 'https://getbootstrap.com/docs/5.2/getting-started/introduction/'
    },
    materialize: { 
      nome: 'Materialize Bootstrap',
      url: 'https://materializecss.com/'
    }
  };
}
