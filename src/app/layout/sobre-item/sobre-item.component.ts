import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sobre-item',
  templateUrl: './sobre-item.component.html',
  styleUrls: ['./sobre-item.component.css']
})
export class SobreItemComponent {

  @Input() descricao!: string;
  @Input() imagem!: string;
}
