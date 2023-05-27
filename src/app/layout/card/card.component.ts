import { Component } from '@angular/core';
import { Filme } from './filme.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  filmes: Filme[] = [

    {
      titulo:'Babilônia', 
      assistido: true, 
      ano: 2022, 
      genero:'Drama', 
      sinopse:'Um conto de ambições exageradas e excessos escandalosos, traçando a ascensão e queda de múltiplos personagens durante uma era de desenfreada decadência e depravação no início de Hollywood.', 
      pais:'EUA', 
      img:'../../../assets/filmes/babilonia.webp'
    },
    {
      titulo:'Velozes e Furiosos 10', 
      assistido: false, 
      ano: 2023, 
      genero: 'Ação/Policial', 
      sinopse: 'Ao longo de muitas missões e lutando contra todos os obstáculos impossíveis, Dom Toretto e sua família foram mais espertos, mais furiosos e mais rápidos do que todos os inimigos em seu caminho. Agora, eles enfrentam o seu oponente mais letal: uma ameaça terrível das sombras do passado, alimentada por sede de vingança e determinada a destruir esta família e a destruir tudo – e todos – que Dom mais ama.', 
      pais: 'EUA', 
      img: '../../../assets/filmes/velozes_furiosos.jpeg'
    },
    {
      titulo:'A Mãe', 
      assistido: true, 
      ano: 2023, 
      genero: 'Ação/Suspense', 
      sinopse: 'Uma assassina perigosa teve que abandonar a filha para fugir dos inimigos. Agora, anos depois, ela precisa sair do esconderijo se quiser proteger a menina.', 
      pais: 'EUA', 
      img: '../../../assets/filmes/a_mae.jpeg'
    },
    
    {
      titulo:'Avatar II', 
      assistido: true, 
      ano: 2022, 
      genero: 'Ficção', 
      sinopse: '12 anos depois de explorar Pandora e se juntar aos Na’vi, Jake Sully formou uma família com Neytiri e se estabeleceu entre os clãs do novo mundo. Porém, a paz não durará para sempre.', 
      pais: 'EUA', 
      img: '../../../assets/filmes/avatar.jpg.webp'
    },
    {
      titulo:'Guardiões da Galáxia III', 
      assistido: false, 
      ano: 2023, 
      genero: 'Ação/Aventura', 
      sinopse: 'Em Guardiões da Galáxia Vol. 3, o amado grupo de desajustados busca se estabelecer em Lugar Nenhum, mas não demora muito para que suas vidas sejam reviradas pelos ecos do passado turbulento de Rocket (Bradley Cooper). Ainda se recuperando da perda de Gamora (Zoe Saldana), após os acontecimentos de Vingadores: Guerra Infinita (2018), Peter Quill (Chris Pratt) reúne sua equipe para defender o universo e um companheiro de equipe. Mas esta missão pode significar o fim dos Guardiões como conhecemos, se ela não for bem-sucedida. Encerramento da trilogia iniciada em 2014, sendo a continuação de Guardiões da Galáxia Vol. 2 (2017).', 
      pais: 'EUA', 
      img: '../../../assets/filmes/guardioes_galaxia.webp'
    },
    {
      titulo:'Emancipação', 
      assistido: true, 
      ano: 2022, 
      genero: 'Ação/Suspense', 
      sinopse: 'Emancipação, uma História de Liberdade conta a triunfante história de um homem escravizado que foge e atravessa os pântanos da Louisiana, nos Estados Unidos, em uma jornada tortuosa para escapar dos proprietários de plantações que quase o mataram. Peter (Will Smith) é o homem em busca da sua liberdade, que escapa da escravidão confiando em sua inteligência, fé inabalável e profundo amor por sua família, fazendo o impossível para se livrar dos caçadores de sangue frio nos implacáveis pântanos da Louisiana. O filme é inspirado nas fotos reais, de 1863, de “Peter chicoteado” (Whipped Peter), tiradas durante um exame médico do Exército dos EUA, que apareceram, pela primeira vez, na revista Harper’s Weekly. Uma destas fotos, conhecida como “As Costas Açoitadas” (The Scourged Back), mostra as costas nuas de Peter mutiladas pelas chicotadas de seus escravizadores e acabou contribuindo para a crescente oposição pública à escravidão, se tornando um símbolo das atrocidades cometidas em seu tempo.', 
      pais: 'EUA', 
      img: '../../../assets/filmes/emancipacao.webp'
    },
  ];
}
